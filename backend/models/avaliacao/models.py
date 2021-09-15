from django.db import models

# Create your models here.


class Avaliacao(models.Model):

    hospital = models.TextField(null=False, blank=False)
    responsavel = models.TextField(null=False, blank=False)

    def _str_(self):
        return self.hospital

    @property
    def analise(self):
        return self.checklist_set.all()


class Checklist(models.Model):

    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.CASCADE)
    secao = models.CharField(max_length=1)
    indice = models.TextField(null=False, blank=False)
    qualificacao = models.TextField(null=False, blank=False)
    avaliacao_item = models.TextField(null=False, blank=False)
    rota = models.TextField(null=False, blank=False)
    comentario = models.TextField(null=False, blank=False)
    status = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.secao
