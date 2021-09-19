from django.db import models


class GeracaoPdf(models.Model):

    def _str_(self):
        return self.name
