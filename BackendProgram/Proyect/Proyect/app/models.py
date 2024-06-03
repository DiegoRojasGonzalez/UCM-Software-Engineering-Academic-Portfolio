from django.db import models

class Pelicula(models.Model):
    pelicula_id = models.UUIDField(primary_key=True)
    titulo = models.TextField()
    genero = models.JSONField()
    año_lanzamiento = models.IntegerField()
    descripcion = models.TextField()
    duracion = models.TextField()