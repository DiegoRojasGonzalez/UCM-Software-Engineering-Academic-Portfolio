
from django.contrib.auth import authenticate,logout as auth_logout , login as auth_login
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required 

from django.shortcuts import redirect, render
from django.http import JsonResponse, HttpResponseForbidden
from .models import Pelicula
from bson import ObjectId

# Create your views here.


def login(request):
    if request.method == 'POST':
        print('hola estas haciendo post ')
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect('index')
        else:
            return JsonResponse({'success': False, 'message': 'Nombre de usuario o contraseña incorrectos.'})
    
    return render(request, 'login.html')

def logout(request):
    auth_logout(request)
    return redirect('login')

def register(request):
    if request.method == 'POST':
        print('se esta haciendo un post ')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password_confirm = request.POST.get('password_confirm')

        if password == password_confirm:
            if User.objects.filter(username=username).exists():
                return JsonResponse({'success': False, 'message': 'El nombre de usuario ya existe.'})
            elif User.objects.filter(email=email).exists():
                return JsonResponse({'success': False, 'message': 'El correo electrónico ya está registrado.'})
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                auth_login(request, user)
                return redirect('index')
        else:
            return JsonResponse({'success': False, 'message': 'Las contraseñas no coinciden.'})

    return render(request, 'register.html')

@login_required
def loadIndex(request):
    peliculas = Pelicula.objects.all()
    return render(request, 'index.html', {'peliculas': peliculas})

@login_required
def addMovie(request):
    if request.method == 'POST':
        titulo = request.POST.get('titulo')
        genero = request.POST.get('genero')
        año_lanzamiento = request.POST.get('ano')
        descripcion = request.POST.get('descripcion')
        duracion = request.POST.get('duracion')

        pelicula = Pelicula(
            titulo=titulo,
            genero=genero,
            año_lanzamiento=año_lanzamiento,
            descripcion=descripcion,
            duracion=duracion
        )
        pelicula.save()

        return redirect('index')

    return JsonResponse({'error': 'Se esperaba una solicitud POST'})

@login_required
def deleteMovie(request, pelicula_id):
    if request.method == 'POST':
        pelicula_id_object = ObjectId(pelicula_id)
        pelicula = Pelicula.objects.get(_id=pelicula_id_object)
        pelicula.delete()
        return redirect('index')
    else:
        return HttpResponseForbidden()

@login_required
def updateMovie(request, pelicula_id):
    if request.method == 'POST':
        # Obtener la película existente
        pelicula_id_object = ObjectId(pelicula_id)
        pelicula = Pelicula.objects.get(_id=pelicula_id_object)

        # Actualizar los campos de la película
        pelicula.titulo = request.POST.get('titulo')
        pelicula.genero = request.POST.get('genero')
        pelicula.año_lanzamiento = request.POST.get('ano')
        pelicula.descripcion = request.POST.get('descripcion')
        pelicula.duracion = request.POST.get('duracion')

        # Guardar los cambios
        pelicula.save()

        return redirect('index')
    else:
        return JsonResponse({'error': 'Se esperaba una solicitud PUT o PATCH'})

