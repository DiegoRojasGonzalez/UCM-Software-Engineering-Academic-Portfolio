from django.urls import path
from .views import *

urlpatterns = [
    path('home/', loadIndex, name='index'),                                     # GET
    path('addMovie/', addMovie, name='addMovie'),                               # POST 
    path('deleteMovie/<str:pelicula_id>/', deleteMovie, name='deleteMovie'),    # DELETE
    path('updateMovie/<str:pelicula_id>/', updateMovie, name='updateMovie'),    # PUT o PATCH

]
