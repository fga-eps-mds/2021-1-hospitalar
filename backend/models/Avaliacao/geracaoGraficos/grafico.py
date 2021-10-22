from io import BytesIO
from django.views.generic.base import TemplateView
from matplotlib import pyplot as plt
import numpy as np
from django.http import FileResponse


class Grafico:
    template_name = 'graph.html'

    def __init__(self, avaliacao) -> None:
        self.avaliacao = avaliacao

    def gerarDados(self):
        dados_plot = {'C': 0, 'PC': 0, 'NC': 0, 'NA': 0}
        secoes = self.avaliacao["secoes"]

        for secao in secoes:
            for sub in secao['subtopicos']:
                status = sub['status']
                dados_plot[status] += 1

        return dados_plot

    def gerarGrafico(self, dados_plot):
        #context = super(Grafico, self).get_context_data(dados_plot)
        keys = dados_plot.keys()
        values = dados_plot.values()

        buffer = BytesIO()

        plt.bar(keys, values)
        plt.savefig(buffer, dpi=75)

        return buffer.getbuffer()
