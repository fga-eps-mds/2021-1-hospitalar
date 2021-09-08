from django.db import models
from django.db.models.fields import EmailField

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=150)
    office = models.CharField(max_length=100)


    def __str__(self):
        return self.name

