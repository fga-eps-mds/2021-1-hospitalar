from reportlab.platypus import SimpleDocTemplate,\
    Paragraph,\
    Spacer,\
    Table,\
    TableStyle

from reportlab.platypus.figures import ImageFigure
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.charts.barcharts import VerticalBarChart
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter, A4
from reportlab.lib import colors
from ..models import Avaliacao

from .utils import TestData


class MyPrint:

    '''
    É passado um Buffer para armazenar os dados em bytes do PDF.
    Podemos escolher o formato da página através dos formatos disponíveis 
    em PageSizes.
    Ele Recebe o código do relatório para recuperar os dados
    Utilizando as classes que encapsulam estruturas, não precisamos usar TAGs.
    '''

    def __init__(self, buffer, pagesize, cod_relatorio):
        self.buffer = buffer
        self.cod_relatorio = cod_relatorio
        if pagesize == 'A4':
            self.pagesize = A4
        elif pagesize == 'letter':
            self.pagesize = letter
        self.width, self.height = self.pagesize

    '''
    É feita a Query através do código passado para o criador do Relatório.
    '''

    def printReport(self):
        # Utilizamos o buffer do init
        buffer = self.buffer
        relatorio = Avaliacao.objects.get(codigo=self.cod_relatorio)

        # doc define o buffer que terá a formatação do documento e qual será ela.
        doc = SimpleDocTemplate(
            buffer,
            rightMargin=72,
            leftMargin=72,
            topMargin=72,
            botomMargin=72,
            pagesize=self.pagesize
        )
        # Aqui serão adicionados os elementos da página (Parágrafos, tabelas...)
        # chamados de Flowables
        elements = []

        # A função getSampleStyleSheet() cria um dicionário com estilos padrões
        # que podem ser usados
        styles = getSampleStyleSheet()

        # Podemos adicionar estilos customizados, utilizando outras classes que
        # encapsulam estilos para cada componente
        styles.add(ParagraphStyle(
            'centered', alignment=TA_CENTER, fontSize=20))

        # Adição de elementos do Banco de Dados
        elements.append(
            Paragraph("Hospital {0}".format(relatorio.nomeHospital), styles['centered']))
        elements.append(Spacer(1, 0.5*cm))
        for secs in relatorio.secoes:
            titulo = secs.topico
            elements.append(Paragraph(titulo, styles['Heading1']))

            for sub in secs.subtopicos:
                subtitulo = sub.nome
                elements.append(Paragraph(subtitulo, styles['Heading2']))
                paragrafo = "Status: {0} \n Comentários: {0}".format(
                    sub.status, sub.comentario)
                elements.append(Paragraph(paragrafo, styles['Normal']))
                elements.append(Spacer(1, 2*cm))

        # Contrução de tabelas
        table_data = []

        # Estilo Customizado para Table Header.
        # Podemos utilizar o nome como índice para acessar (nesse caso:
        # TableHeader)
        styles.add(ParagraphStyle(
            name="TableHeader", fontSize=11, alignment=TA_CENTER
        ))

        # Linhas e colunas da tabela
        weather = TestData.weather_brasilia['city']

        cidade = weather['cityName']
        elements.append(
            Paragraph(cidade+"'s Weather", styles['Heading1'])
        )
        elements.append(
            Spacer(1, 0.4*cm)
        )

        dados = weather['forecast']['forecastDay']

        # header
        table_data.append([Paragraph(text, styles['TableHeader'])
                          for text in dados[0].keys()])
        # dados da tabela (linhas)
        for data in dados:
            table_data.append(
                [Paragraph(data[i]) for i in dados[0].keys()]
            )

        # Criando a Tabela
        wh_table = Table(table_data)

        # Estilização da Tabela - Seleciona as células por um range (x1, y1), (x2, y2)
        wh_table.setStyle(
            TableStyle([
                ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.black),
                ('BOX', (0, 0), (-1, -1), 0.5, colors.black),
                ('VALIGN', (0, 0), (-1, 0), 'MIDDLE'),
                ('BACKGROUND', (0, 0), (-1, 0), colors.gray)
            ])
        )

        # Inserindo a tabela na composição do documento
        elements.append(wh_table)

        doc.build(elements)

        # O pdf é formado pelos bytes do buffer
        pdf = buffer.getvalue()

        # Close the PDF object cleanly, and we're done.
        buffer.close()
        return pdf
