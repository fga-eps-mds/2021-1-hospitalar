from enum import unique
from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Usuario(User):
    nome = models.TextField(max_length=100)
    tipo = models.TextField(max_length=50)
    funcao = models.TextField(max_length=50)
    organizacao = models.TextField(max_length=50)


    def __str__(self):
        return self.nome
