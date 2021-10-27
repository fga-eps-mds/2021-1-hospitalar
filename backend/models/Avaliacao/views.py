from matplotlib import pyplot
from rest_framework import viewsets
from .models import Avaliacao
from .serializers import AvaliacaoSerializer
from django.http import HttpResponse
from rest_framework.decorators import action
from rest_framework import viewsets
from .relatorio.printing import MyPrint
from io import BytesIO
from rest_framework.response import Response
from rest_framework.status import *
from matplotlib import pyplot as plt
import matplotlib
matplotlib.use('Agg')
# Create your views here.


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()

    @action(methods=['get'], detail=False)
    def generatePDF(self, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'

        # buffer armazena os bytes para o PDF (PDF é arquivo compilável)
        buffer = BytesIO()

        # exemplo para a avaliação cadastrada com código fgvgrad
        getAval2 = Avaliacao.objects.get(codigo="fgvgrad")

        # Utilizando o construtor para o Relatório
        # buffer, Formato e Código da Aval.
        report = MyPrint(buffer, 'A4', getAval2.codigo)

        # Função que retorna o PDF utilizando o valor do buffer
        pdf = report.printReport()

        # Armazenando o PDF na resposta do servidor
        response.write(pdf)

        return response

    @action(methods=['get'], detail=True)
    def geraGrafico(self, request, pk):
        try:
            obj_avaliacao = Avaliacao.objects.get(id=pk)
        except:
            return Response(status=HTTP_404_NOT_FOUND)

        avaliacao_json = self.get_serializer(obj_avaliacao)

        dados_plot = {'C': 0, 'PC': 0, 'NC': 0, 'NA': 0}
        secoes = avaliacao_json.data["secoes"]

        for secao in secoes:
            for sub in secao['subtopicos']:
                status = sub['status']
                dados_plot[status] += 1

        keys = dados_plot.keys()
        values = dados_plot.values()

        buffer = BytesIO()

        plt.bar(keys, values, color=['cyan'])
        plt.savefig(buffer, dpi=100)

        return HttpResponse(buffer.getbuffer(), content_type='image/png')
