from django.db import models
from .models import Secao
from datetime import datetime

# Create your models here.


class Avaliacao(models.Model):
    secao = models.ForeignKey(Secao, on_delete=models.CASCADE)
    codigo = models.TextField(blank=True)
    nomeHospital = models.TextField(blank=True)
    idsAvaliadores = models.TextField(blank=True)
    data = models.DateTimeField(default=datetime.now, blank=True)
    
    def __str__(self):
        return self.codigo