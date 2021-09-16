from rest_framework import serializers
from .models import Secao, Subtopico


class SubtopicoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Subtopico
        fields = ('id', 'secao', 'nome', 'status', 'comentario')
        read_only_fields = ('secao',)


class SecaoSerializer(serializers.ModelSerializer):
    subtopicos = SubtopicoSerializer(many=True)

    class Meta:
        model = Secao
        fields = ('id', 'topico', 'subtopicos')

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

        subtopicos = validated_data.pop('subtopicos')
        secao = Secao.objects.create(**validated_data)
        for linha in subtopicos:
            Subtopico.objects.create(**linha, secao=secao)

        return secao

    def update(self, instance, validated_data):
        '''
            Esse método será executado ao fazer uma requisição PUT e deverá atualizar
            a seção cujo id seja igual ao id passado pelo parâmetro da requisição.
            Parâmetros: 
                instance: Objeto a ser editado.
                validated_data: Objeto que representa o JSON passado como corpo da
                                requisição.
            Retorno:
                O objeto já editado.
            PS: Para editar uma seção, o corpo da requisição deve conter o campo
                subtopicos pois este será usado para identificar quais subtopicos criar, 
                editar ou destruir. As seções e subtópicos, passados para o JSON, que tiverem ID 
                serão editados, as que não tiverem ID serão criados e as que existirem 
                no objeto mas não existirem na requisição serão apagados.
        '''

        subtopicos = validated_data.pop('subtopicos')

        instance.topico = validated_data.get("topico", instance.topico)

        instance.save()

        keep_subtopicos = []
        for linha in subtopicos:

            if "id" not in linha.keys():
                novoSub = Subtopico.objects.create(**linha, secao=instance)
                keep_subtopicos.append(novoSub.id)

            else:
                if Subtopico.objects.filter(id=linha["id"]).exists():
                    editarSub = Subtopico.objects.get(id=linha["id"])

                    editarSub.secao = linha.get('secao', editarSub.secao)
                    editarSub.nome = linha.get('nome', editarSub.nome)
                    editarSub.status = linha.get('status', editarSub.status)
                    editarSub.comentario = linha.get(
                        'comentario', editarSub.comentario)

                    editarSub.save()
                    keep_subtopicos.append(editarSub.id)
                else:
                    continue

        for linha in instance.subtopicos:
            if linha.id not in keep_subtopicos:
                linha.delete()

        return instance
