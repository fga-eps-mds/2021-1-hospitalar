from dataclasses import field
from rest_framework import serializers
from .models import Pessoa


class PessoaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pessoa
        fields = ('id', 'nome', 'idade', 'telefone', 'endereco', 'cpf')
