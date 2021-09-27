from django.db import models
import uuid

from ..Secao.models import Secao

# Create your models here.


class Avaliacao(models.Model):
    secoes = models.ManyToManyField(Secao, editable=False)
    data = models.DateTimeField(auto_now=True)
    codigo = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    status = models.CharField(max_length=2, blank=True)
    comentario = models.TextField(blank=True)
    # idsAvaliadores = models.ManyToManyField(Usuarios)
    nome_hospital = models.TextField(max_length=75)

    def __str__(self):
        return self.codigo
