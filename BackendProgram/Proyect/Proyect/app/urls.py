from django.urls import path
from .views import *

urlpatterns = [
    path('login/', login, name="login"),
    path('register/', register, name="register"),
    path('home/', loadIndex, name='index'),                                     # GET
    path('addMovie/', addMovie, name='addMovie'),                               # POST 
    path('deleteMovie/<str:pelicula_id>/', deleteMovie, name='deleteMovie'),    # POST / DELETE
    path('updateMovie/<str:pelicula_id>/', updateMovie, name='updateMovie'),    # POST / PUT o PATCH

]
