from django.db import models

# Create your models here.


class Avaliacao(models.Model):

    hospital = models.TextField(blank=True)
    responsavel = models.TextField(blank=True)

    def _str_(self):
        return self.hospital

    @property
    def analise(self):
        '''
            Esse método é nada mais que um dos atributos dessa classe,
            ele representa uma lista de objetos Checklist.
        '''

        return self.checklist_set.all()


class Checklist(models.Model):

    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.CASCADE)
    secao = models.CharField(max_length=1, blank=True)
    indice = models.TextField(blank=True)
    qualificacao = models.TextField(blank=True)
    avaliacao_item = models.TextField(blank=True)
    rota = models.TextField(blank=True)
    comentario = models.TextField(blank=True)
    status = models.TextField(blank=True)

    def __str__(self):
        return self.secao
