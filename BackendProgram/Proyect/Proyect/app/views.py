from django.shortcuts import redirect, render
from django.http import JsonResponse, HttpResponseForbidden
from .models import Pelicula
from bson import ObjectId

# Create your views here.

# Index View 
def loadIndex(request):
    peliculas = Pelicula.objects.all()
    return render(request, 'index.html', {'peliculas': peliculas})

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

def deleteMovie(request, pelicula_id):
    if request.method == 'POST':
        pelicula_id_object = ObjectId(pelicula_id)
        pelicula = Pelicula.objects.get(_id=pelicula_id_object)
        pelicula.delete()
        return redirect('index')
    else:
        return HttpResponseForbidden()
    
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
