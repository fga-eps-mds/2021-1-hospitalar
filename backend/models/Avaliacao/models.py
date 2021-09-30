from ..Secao.models import Secao
from django.db import models
from datetime import datetime

# Create your models here.


class Avaliacao(models.Model):
    codigo = models.TextField(blank=True)
    nomeHospital = models.TextField(blank=True)
    idsAvaliadores = models.TextField(blank=True)
    data = models.DateTimeField(auto_now=True)
    secoes = Secao.objects.all()

    def __str__(self):
        return self.codigo
