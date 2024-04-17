from django.shortcuts import render
from .models import Producto

def index(request):
    productos = Producto.objects.all()  # Obtiene todos los productos de la base de datos
    return render(request, 'productos/index.html', {'productos': productos})
