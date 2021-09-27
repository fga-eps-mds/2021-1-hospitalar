from backend.models.Secao.serializers import SecaoSerializer
from django.db.models import fields
from rest_framework import serializers
from .models import Avaliacao
from .models import Secao


class AvaliacaoSerializer(serializers.ModelSerializer):
    secoes = SecaoSerializer(many=True)

    class Meta:
        model = Avaliacao
        fields = '__all__'

    def create(self, validated_data):
        '''
            Esse método será executado ao fazer uma requisição POST e deverá criar
            uma nova seção de acordo com o JSON passado no corpo da requisição.
            Esse método se faz necessário pois o ModelSerializer não é capaz de
            criar essa funcionalidade automaticamente quando a classe tem alguma
            relação com outra classe.
            O campo subtópicos desta classe é uma lista do objeto Subtopico, ilustrando 
            assim uma relação de composição.
            Parâmetro: 
                validated_data: Objeto que representa o JSON passado como corpo da
                                requisição.
            Retorno:
                O objeto criado.
        '''

        secoes = validated_data.pop('secao')
        secao = Secao.objects.create(**validated_data)
        for linha in subtopicos:
            Subtopico.objects.create(**linha, secao=secao)

        return secao
