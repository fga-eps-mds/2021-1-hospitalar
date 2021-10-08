from rest_framework import serializers
from .models import Avaliacao, Secao, Subtopico


class SubtopicoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Subtopico
        fields = ('id', 'nome', 'status', 'comentario', 'pontuacao')


class SecaoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    subtopicos = SubtopicoSerializer(many=True)

    class Meta:
        model = Secao
        fields = ('id', 'topico', 'subtopicos')


class AvaliacaoSerializer (serializers.ModelSerializer):
    secoes = SecaoSerializer(many=True)

    class Meta:
        model = Avaliacao
        fields = ('id', 'codigo', 'nomeHospital',
                  'idsAvaliadores', 'data', 'secoes')

    def create(self, validated_data):
        secoes = validated_data.pop('secoes')

        avaliacao = Avaliacao.objects.create(**validated_data)

        for secao in secoes:
            subtopicos = secao.pop('subtopicos')

            objsecao = Secao.objects.create(avaliacao=avaliacao,
                                            **secao)

            for subtopico in subtopicos:

                Subtopico.objects.create(secao=objsecao,
                                         **subtopico)

        return avaliacao

    def update(self, instance, validated_data):
        secoes = validated_data.pop('secoes')

        instance.codigo = validated_data.get("codigo", instance.codigo)
        instance.nomeHospital = validated_data.get(
            "nomeHospital", instance.nomeHospital)
        instance.idsAvaliadores = validated_data.get(
            "idsAvaliadores", instance.idsAvaliadores)
        instance.data = validated_data.get("data", instance.data)

        instance.save()

        keep_secoes = []

        for secao in secoes:

            if "id" not in secao.keys():
                novaSecao = Secao.objects.create(**secao, avaliacao=instance)
                keep_secoes.append(novaSecao.id)

                subtopicos = secao.pop('subtopicos')

                for subtopico in subtopicos:
                    Subtopico.objects.create(**subtopico, secao=novaSecao)

            else:
                if Secao.objects.filter(id=secao["id"]).exists():
                    editarSecao = Secao.objects.get(id=secao["id"])

                    editarSecao.topico = secao.get(
                        'topico', editarSecao.topico)
                    editarSecao.avaliacao = secao.get(
                        'avaliacao', editarSecao.avaliacao)

                    editarSecao.save()
                    keep_secoes.append(editarSecao.id)

                    subtopicos = secao.pop('subtopicos')
                    keep_subtopicos = []

                    for subtopico in subtopicos:
                        if "id" not in subtopico.keys():
                            novoSub = Subtopico.objects.create(
                                **subtopico, secao=editarSecao)
                            keep_subtopicos.append(novoSub.id)

                        else:
                            if Subtopico.objects.filter(id=subtopico["id"]).exists():
                                editarSub = Subtopico.objects.get(
                                    id=subtopico["id"])

                                editarSub.secao = subtopico.get(
                                    'secao', editarSub.secao)
                                editarSub.nome = subtopico.get(
                                    'nome', editarSub.nome)
                                editarSub.status = subtopico.get(
                                    'status', editarSub.status)
                                editarSub.comentario = subtopico.get(
                                    'comentario', editarSub.comentario)
                                editarSub.pontuacao = subtopico.get(
                                    'pontuacao', editarSub.pontuacao)

                                editarSub.save()
                                keep_subtopicos.append(editarSub.id)

                            else:
                                continue

                    for subtopico in editarSecao.subtopicos:
                        if subtopico.id not in keep_subtopicos:
                            subtopico.delete()

                else:
                    continue

        for secao in instance.secoes:
            if secao.id not in keep_secoes:
                secao.delete()

        return instance
