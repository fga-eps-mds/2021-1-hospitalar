from rest_framework import viewsets
from .models import Avaliacao
from .serializers import AvaliacaoSerializer
from django.http import HttpResponse
from rest_framework.decorators import action
from rest_framework import viewsets
from .relatorio.printing import MyPrint
from io import BytesIO
from .geracaoGraficos.grafico import Grafico
from rest_framework.response import Response
from rest_framework.status import *
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
        gerador = Grafico(avaliacao_json.data)
        dados = gerador.gerarDados()
        plot = gerador.gerarGrafico(dados)
        response = HttpResponse(plot)
        response['Content-Type'] = 'image/png'
        return response
