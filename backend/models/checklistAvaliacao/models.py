from django.db import models


class Avaliacao(models.Model):
    hospital = models.TextField(blank=True)

    def _str_(self):
        return self.hospital

    @property
    def checklists(self):
        '''
            Esse método é nada mais que um dos atributos dessa classe,
            ele representa uma lista de objetos Checklist.
        '''

        return self.checklist_set.all()

    @property
    def responsaveis(self):
        return self.responsavel_set.all()


class Checklist(models.Model):
    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.CASCADE)
    secao = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.secao

    @property
    def itens(self):
        return self.item_set.all()


class Item(models.Model):
    checklist = models.ForeignKey(Checklist, on_delete=models.CASCADE)
    indice = models.CharField(max_length=100, blank=True)
    qualificacao = models.TextField(blank=True)
    avaliacao = models.TextField(blank=True)
    pontos = models.IntegerField(blank=True)
    comentario = models.TextField(blank=True)
    status = models.TextField(blank=True)

    def __str__(self):
        return self.indice


class Responsavel(models.Model):
    avaliacao = models.ForeignKey(Avaliacao, on_delete=models.CASCADE)
    nome = models.CharField(max_length=100, blank=True)
    funcao = models.CharField(max_length=100, blank=True)
    sigla_om = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.nome
