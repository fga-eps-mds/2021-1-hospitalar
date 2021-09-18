from rest_framework import serializers
from hospital.models import Item, Checklist, Avaliacao


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model=Item
        fields = ('ItemId','Qualificacao','Avaliacao', 'Nota', 'Comentario', 'Status' )

class ChecklistSerializer(serializers.ModelSerializer):
    class Meta:
        model=Checklist
        fields = ('ChecklistId','Secao')

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Avaliacao
        fields = ('AvaliacaoId','Analise', 'Hospital', 'Responsavel')

