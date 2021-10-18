from enum import unique
from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Usuario(User):
    nome = models.TextField()
    tipo = models.TextField()
    funcao = models.TextField()
    organizacao = models.TextField()

    USERNAME_FIELD = 'email' 

    def __str__(self):
        return self.nome
