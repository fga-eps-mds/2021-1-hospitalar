from rest_framework import serializers
from .models import Avaliacao



class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avaliacao
        fields = ('secao', 'user','codigo', 'nomeHospital', 'idsAvaliadores', 'data')
        
