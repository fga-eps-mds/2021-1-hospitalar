from rest_framework import serializers
from .models import GraficoRelatorio


class GraficoRelatorioSerializer(serializers.ModelSerializer):
    class Meta:
        model = GraficoRelatorio
        fields = ()