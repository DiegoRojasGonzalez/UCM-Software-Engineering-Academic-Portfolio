from django.db import models


class Producto(models.Model):
    codigoBarra = models.CharField(max_length=666)
    nombre = models.CharField(max_length=666)
    categoria = models.CharField(max_length=666)
    precioUnitario = models.CharField(max_length=666)

    def __str__(self):
        return self.nombre
