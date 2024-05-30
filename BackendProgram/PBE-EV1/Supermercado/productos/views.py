from django.shortcuts import render
from .models import Producto

# con el orm obtenemos todos los objetos dentro de la tabla 'Producto'
# tambien cargamos los productos al template
def index(request):
    productos = Producto.objects.all() 
    return render(request, 'index.html', {'productos': productos})
