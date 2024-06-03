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

class CalificacionPelicula(models.Model):
    rating_id = models.UUIDField(primary_key=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE)
    valor_rating = models.IntegerField()
    timestamp = models.DateTimeField()

class ComentarioPelicula(models.Model):
    comment_id = models.UUIDField(primary_key=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE)
    texto_comentario = models.TextField()
    timestamp = models.DateTimeField()

class ReviewPelicula(models.Model):
    review_id = models.UUIDField(primary_key=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE)
    titulo_review = models.CharField(max_length=255)
    texto_review = models.TextField()
    valor_rating = models.IntegerField()
    timestamp = models.DateTimeField()
