from django.urls import path
from .views import *

urlpatterns = [
    path('home/', loadIndex, name='index'),
    path('addMovie/', addMovie, name='addMovie'), # POST AGREGAR PELICULA 

]
