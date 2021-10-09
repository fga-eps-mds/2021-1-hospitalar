from rest_framework import serializers
from .models import Configuracao


class ConfiguracaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Configuracao
        fields = ('id', 'NV1', 'NV2', 'NV3')
