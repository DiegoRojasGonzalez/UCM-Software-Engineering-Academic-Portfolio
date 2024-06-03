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

        # Crear la película en la base de datos MongoDB
        pelicula = Pelicula(
            titulo=titulo,
            genero=genero,
            año_lanzamiento=año_lanzamiento,
            descripcion=descripcion,
            duracion=duracion
        )
        pelicula.save()

        # Retornar una respuesta JSON
        return redirect('index')


    # Si no es un método POST, retornar un error
    return JsonResponse({'error': 'Se esperaba una solicitud POST'})

def deleteMovie(request, pelicula_id):
    if request.method == 'POST' and request.POST.get('_method') == 'DELETE':
        pelicula_id_object = ObjectId(pelicula_id)
        pelicula = Pelicula.objects.get(_id=pelicula_id_object)
        pelicula.delete()
        return redirect('index')
    else:
        return HttpResponseForbidden()