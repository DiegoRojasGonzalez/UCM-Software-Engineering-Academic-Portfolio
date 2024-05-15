from django.db import models

class Producto(models.Model):
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.IntegerField()
    categoria = models.CharField(max_length=100)

    def __str__(self):
        return self.categoria
