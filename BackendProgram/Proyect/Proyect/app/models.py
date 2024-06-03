from django.db import models
from djongo import models

class Pelicula(models.Model):
    _id = models.ObjectIdField()
    titulo = models.TextField()
    genero = models.TextField()
    año_lanzamiento = models.TextField()
    descripcion = models.TextField()
    duracion = models.TextField()