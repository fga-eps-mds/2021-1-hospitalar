from rest_framework import serializers
from .models import Avaliacao


class AvaliacaoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Avaliacao
        fields = ('id', )
