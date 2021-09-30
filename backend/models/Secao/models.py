from django.db import models

# Create your models here.


class Secao(models.Model):
    topico = models.TextField(blank=True)

    def __str__(self):
        return self.topico

    @property
    def subtopicos(self):
        return self.subtopico_set.all()


class Subtopico(models.Model):
    STATUS_CHOICES = [
        ("F", "Finalizado"),
        ("P", "Pendente"),
        ("E", "Erros")
    ]

    secao = models.ForeignKey(Secao, on_delete=models.CASCADE)
    nome = models.TextField(blank=True)
    status = models.CharField(
        max_length=2, blank=True, choices=STATUS_CHOICES)
    comentario = models.TextField(blank=True)

    def __str__(self):
        return self.status
