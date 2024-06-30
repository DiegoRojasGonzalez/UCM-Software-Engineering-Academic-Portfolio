from django.db import models

# Create your models here.

class Customer(models.Model):
    first_name = models.CharField(max_length=99)
    last_name = models.CharField(max_length=99)
    email = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.first_name 

class Address(models.Model):
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
    address_line1 = models.CharField(max_length=199)
    address_line2 = models.CharField(max_length=199)
    city = models.CharField(max_length=99)
    state = models.CharField(max_length=99)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=99)

    def __str__(self):
        return self.address_line1 + " - " + self.city + " | " + self.customer_id.first_name 