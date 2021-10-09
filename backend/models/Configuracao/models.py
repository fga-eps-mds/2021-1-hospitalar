from django.db import models

# Create your models here.


class Configuracao(models.Model):

    # atributos vem aqui
    NV1 = models.FloatField()
    NV2 = models.FloatField()
    NV3 = models.FloatField()

    def _str_(self):
        return (
            f"""
        Notas :
        C : {self.C}
        PC : {self.PC}
        NC : {self.NC}
        NV1 : {self.NV1}
        NV2 : {self.NV2}
        NV3 : {self.NV3}
        """
        )
