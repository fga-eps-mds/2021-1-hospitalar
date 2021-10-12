from django.db import models

# Create your models here.


class Avaliacao(models.Model):
    codigo = models.TextField(blank=True, unique=True)
    nomeHospital = models.TextField(blank=True)
    idsAvaliadores = models.TextField(blank=True)
    data = models.DateTimeField(blank=True)

    def __str__(self):
        return self.codigo

    @property
    def secoes(self):
        return self.secao_set.all()


class Secao(models.Model):
    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.CASCADE)

    topico = models.TextField(blank=True)

    def __str__(self):
        return self.topico

    @property
    def subtopicos(self):
        return self.subtopico_set.all()


class Subtopico(models.Model):
    secao = models.ForeignKey(Secao, on_delete=models.CASCADE)

    nome = models.TextField(blank=True)
    conforme = models.BooleanField(blank=True, default=False)
    parcialConforme = models.BooleanField(blank=True, default=False)
    naoConforme = models.BooleanField(blank=True, default=False)
    naoAplicavel = models.BooleanField(blank=True, default=False)
    status = models.CharField(max_length=2, blank=True)
    pontuacao = models.FloatField(blank=True, default=0.0)
    comentario = models.TextField(blank=True)

    def __str__(self):
        return self.status
