from django.urls import path
from .views import *

urlpatterns = [
    path('home/', loadIndex, name='index'),
    path('agregar_pelicula/', agregar_pelicula, name='agregar_pelicula'), # POST AGREGAR PELICULA 

]
