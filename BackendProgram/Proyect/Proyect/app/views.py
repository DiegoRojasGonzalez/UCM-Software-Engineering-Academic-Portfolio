from django.shortcuts import render
from django.http import JsonResponse
from .models import Pelicula

# Create your views here.

# Index View 
def loadIndex(request):
    return render(request, 'index.html')

def addMovie(request):
    if request.method == 'POST':
        # Obtener los datos del formulario
        titulo = request.POST.get('titulo')
        genero = request.POST.get('genero')
        año_lanzamiento = request.POST.get('año_lanzamiento')
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
        return JsonResponse({'mensaje': 'Película agregada correctamente'})

    # Si no es un método POST, retornar un error
    return JsonResponse({'error': 'Se esperaba una solicitud POST'})
