from django.db import models

# Create your models here.


class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    idade = models.IntegerField()
    telefone = models.CharField(max_length=15)
    endereco = models.TextField()
    cpf = models.CharField(max_length=15)

    def __str__(self):
        return self.nome
