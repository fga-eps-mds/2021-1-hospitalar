from dataclasses import fields
from rest_framework import serializers
from .models import Avaliacao, Checklist


class ChecklistSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Checklist
        fields = ('id', 'avaliacao', 'secao', 'indice', 'qualificacao',
                  'avaliacao_item', 'rota', 'comentario', 'status')
        read_only_fields = ('avaliacao',)


class AvaliacaoSerializer(serializers.ModelSerializer):
    analise = ChecklistSerializer(many=True)

    class Meta:
        model = Avaliacao
        fields = ('id', 'analise', 'hospital', 'responsavel')

    def create(self, validated_data):
        analise = validated_data.pop('analise')
        avaliacao = Avaliacao.objects.create(**validated_data)
        for linha in analise:
            Checklist.objects.create(**linha, avaliacao=avaliacao)

        return avaliacao

    def update(self, instance, validated_data):
        analise = validated_data.pop('analise')
        instance.hospital = validated_data.get("hospital", instance.hospital)
        instance.responsavel = validated_data.get(
            "responsavel", instance.responsavel)
        instance.save()
        keep_analises = []
        for linha in analise:
            if "id" in linha.keys():
                if Checklist.objects.filter(id=linha["id"]).exists():
                    c = Checklist.objects.get(id=linha["id"])

                    c.avaliacao = linha.get('avaliacao', c.avaliacao)
                    c.secao = linha.get('secao', c.secao)
                    c.indice = linha.get('indice', c.indice)
                    c.qualificacao = linha.get('qualificacao', c.qualificacao)
                    c.avaliacao_item = linha.get(
                        'avaliacao_item', c.avaliacao_item)
                    c.rota = linha.get('rota', c.rota)
                    c.comentario = linha.get('comentario', c.comentario)
                    c.status = linha.get('status', c.status)

                    c.save()
                    keep_analises.append(c.id)
                else:
                    continue
            else:
                c = Checklist.objects.create(**linha, avaliacao=instance)
                keep_analises.append(c.id)

        for linha in instance.analise:
            if linha.id not in keep_analises:
                linha.delete()

        return instance
