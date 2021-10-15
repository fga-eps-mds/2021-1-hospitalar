from django.db import models

# Create your models here.


class Configuracao(models.Model):
    NV1 = models.FloatField(default=7)
    NV2 = models.FloatField(default=8)
    NV3 = models.FloatField(default=9)

    def _str_(self):
        return (
            f"""
        Notas :
        NV1 : {self.NV1}
        NV2 : {self.NV2}
        NV3 : {self.NV3}
        """
        )


class Avaliacao(models.Model):
    codigo = models.TextField(unique=True)
    nomeHospital = models.TextField(blank=True)
    idsAvaliadores = models.TextField(blank=True)
    data = models.DateTimeField()
    configuracao = models.OneToOneField(Configuracao, on_delete=models.CASCADE)

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

    
    class Status(models.TextChoices):
        Conforme = 'C'
        Parcialmente_conforme = 'PC'
        Nao_conforme = 'NC'
        Nao_aplica = 'NA'

    status = models.CharField(max_length=2,
                              choices=Status.choices,
                              default=Status.Nao_aplica)

    pontuacao = models.FloatField(default=0)
    comentario = models.TextField(blank=True)

    def __str__(self):
        return self.status
