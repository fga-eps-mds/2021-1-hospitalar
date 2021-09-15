from rest_framework import serializers
from .models import Item, Checklist, Avaliacao, Responsavel


class ItemSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Item
        fields = ('ItemId', 'Qualificacao', 'Avaliacao',
                  'Nota', 'Comentario', 'Status')
    read_only_fields = ('checklist',)


class ResponsavelSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Responsavel
        fields =


class ChecklistSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    itens = ItemSerializer(many=True)

    class Meta:
        model = Checklist
        fields = ('id', 'avaliacao', 'secao', 'itens')
    read_only_fields = ('avaliacao',)


class AvaliacaoSerializer(serializers.ModelSerializer):
    checklists = ChecklistSerializer(many=True)
    responsaveis = ResponsavelSerializer(many=True)

    class Meta:
        model = Avaliacao
        fields = ('id', 'hospital', 'checklists', 'responsaveis')
