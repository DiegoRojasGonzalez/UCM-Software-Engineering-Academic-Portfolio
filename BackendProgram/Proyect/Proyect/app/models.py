from django.db import models
from django.contrib.auth.models import AbstractUser

class Pelicula(models.Model):
    pelicula_id = models.UUIDField(primary_key=True)
    titulo = models.TextField()
    genero = models.JSONField()
    año_lanzamiento = models.IntegerField()
    descripcion = models.TextField()
    duracion = models.TextField()

class Usuario(AbstractUser):
    favoritas = models.JSONField(default=list)
    lista_para_ver = models.JSONField(default=list)
    pass

