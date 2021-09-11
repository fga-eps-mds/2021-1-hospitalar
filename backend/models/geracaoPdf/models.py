from django.db import models


class GeracaoPdf(models.Model):
    infosPdf = models.CharField(max_length=1000)
    cabecalhoPdf = models.CharField(max_length=100)
    textoEntradaPdf = models.TextField()
    # atributos vem aqui

    def _str_(self):
        return self.infosPdf
