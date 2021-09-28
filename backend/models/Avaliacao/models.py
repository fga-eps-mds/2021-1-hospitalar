from django.db import models
import uuid

from ..Secao.models import Secao

# Create your models here.


class Avaliacao(models.Model):
    STATUS_CHOICES = {
        {"D": "Finalizado"},
        {"P": "Pendente"},
        {"E": "Erros"}
    }

    secoes = models.ManyToManyField(Secao, editable=False)
    data = models.DateTimeField(auto_now=True)
    codigo = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    status = models.CharField(
        max_length=2, blank=False, null=False, choices=STATUS_CHOICES, editable=True)
    comentarios = models.TextField(max_length=500, blank=True, editable=True)
    # idsAvaliadores = models.ManyToManyField(Usuarios)
    nome_hospital = models.TextField(max_length=75, blank=False, null=False)

    def __str__(self):
        return self.codigo
