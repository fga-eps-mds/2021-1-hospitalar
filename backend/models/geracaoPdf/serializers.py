from rest_framework import serializers
from .models import GeracaoPdf


class GeracaoPdfSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeracaoPdf
        fields = ('id', 'infosPdf', 'cabecalhoPdf', 'textoEntradaPdf')
