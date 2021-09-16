from rest_framework import serializers
from .models import Secao, Subtopico


class SubtopicoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Subtopico
        fields = ('id', 'secao', 'status', 'comentario')
        read_only_fields = ('secao',)


class SecaoSerializer(serializers.ModelSerializer):
    subtopicos = SubtopicoSerializer(many=True)

    class Meta:
        model = Secao
        fields = ('id', 'topico', 'subtopicos')

    def create(self, validated_data):
        '''
            Esse método será executado ao fazer uma requisição POST e deverá criar
            uma nova avaliação de acordo com o JSON passado no corpo da requisição.
            Esse método se faz necessário pois o ModelSerializer não é capaz de
            criar essa funcionalidade automaticamente quando a classe tem alguma
            relação com outra classe.
            O campo analise desta classe é uma lista do objeto Checklist, ilustrando 
            assim uma relação de composição.
            Parâmetro: 
                validated_data: Objeto que representa o JSON passado como corpo da
                                requisição.
            Retorno:
                O objeto criado.
        '''

        subtopicos = validated_data.pop('subtopicos')
        secao = Secao.objects.create(**validated_data)
        for linha in subtopicos:
            Subtopico.objects.create(**linha, secao=secao)

        return secao
