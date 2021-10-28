import os
from reportlab.graphics.charts.legends import Legend
from reportlab.graphics.shapes import Drawing, String
from reportlab.lib.validators import Auto
from reportlab.platypus import SimpleDocTemplate,\
    Paragraph,\
    Spacer,\
    Table,\
    TableStyle,\
    PageBreak,\
    Image

from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus.figures import ImageFigure
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.graphics.charts.barcharts import BarChart, VerticalBarChart
from reportlab.graphics.charts.piecharts import Pie
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

from reportlab.lib.pagesizes import letter, A4
from reportlab.lib import colors
from ..models import Avaliacao
from ...Usuario.models import User

from .utils import TestData


class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        canvas.Canvas.__init__(self, *args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        """add page info to each page (page x of y)"""
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_number(self, page_count):
        # Change the position of this to wherever you want the page number to be
        self.drawRightString(202 * mm, 15 * mm + (0.2 * inch),
                             "Page %d of %d" % (self._pageNumber, page_count))


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

        # Seções do relatório
        self.list_items_relat = {
            '1': 'FINALIDADE DA AVALIAÇÃO',
            '2': 'OBJETIVOS DA AVALIAÇÃO',
            '3': 'RESULTADOS DA AVALIAÇÃO',
        }

    def finalidade_aval(self, codigo):
        relatorio = Avaliacao.objects.get(codigo=codigo)
        text = '''
        A Avaliação do {} teve caráter educativo e diagnóstico nos processos de 
        melhoria contínua da saúde assistencial militar. Também buscou reforçar a cultura de Segurança do 
        Paciente naquela Organização Militar de Saúde (OMS), identificar os pontos fortes, oportunidades 
        de melhoria e promover a cooperação interna entre as pessoas e os processos.
        '''.format(relatorio.nomeHospital)

        return text

    def objetivos_aval(self, codigo):
        relatorio = Avaliacao.objects.get(codigo=codigo)
        text = '''
        a. Fornecer um diagnóstico organizacional do {}, aplicando a metodologia 
        da Acreditação da Saúde Assistencial Militar (ASAM).

        b. Aprimorar o Caderno de Orientação da Acreditação da Saúde Assistencial Militar
        e possibilitar a sua validação.
        '''.format(relatorio.nomeHospital)

        return text

    def aval_sucinta(self, table_data):
        relatorio = Avaliacao.objects.get(codigo=self.cod_relatorio)

        conformes = table_data[-1][2].split('%')
        conformes_val = float(conformes[0])

        nao_conformes = table_data[-1][3].split('%')
        nao_conformes_val = float(nao_conformes[0])

        text = '''
        a. Avaliação Sucinta: o {} foi avaliado dentro dos critérios de avaliação 
        para a Acreditação Hospitalar, que foram revistos e que ainda estão em desenvolvimento. A OMS 
        obteve apenas {}% de itens conformes e totalizou {}% em itens conformes e parcialmente 
        conformes em todas as áreas.
        '''.format(relatorio.nomeHospital, conformes_val, conformes_val + nao_conformes_val)

        return text

    @staticmethod
    def _footer(canvas, doc):
        # Save the state of our canvas so we can draw on it
        canvas.saveState()
        styles = getSampleStyleSheet()

        # Footer
        footer = Paragraph(
            'Relatório de Avaliação Hospitalar', styles['Normal'])
        w, h = footer.wrap(doc.width, doc.bottomMargin)
        footer.drawOn(canvas, doc.leftMargin, h + 1.7 * cm)

        # Release the canvas
        canvas.restoreState()

    '''
    Organização dos dados do gráfico
    '''

    def get_users(self):
        relatorio = Avaliacao.objects.get(codigo=self.cod_relatorio)
        usersids = relatorio.idsAvaliadores.split(',')
        print(usersids)

        users = [User.objects.get(id=userid) for userid in usersids if userid]

        return users

    def tabela_users(self, styles):
        users = self.get_users()

        table_data = []

        # Headers
        table_data.append([
            Paragraph("Pessoal", styles),
            Paragraph("Função", styles),
            Paragraph("Organização", styles),
        ])

        for user in users:
            nome = user.nome
            funcao = user.funcao
            organizacao = user.organizacao

            table_data.append([nome, funcao, organizacao])

        return table_data

    def get_pontos(self):
        relatorio = Avaliacao.objects.get(codigo=self.cod_relatorio)
        final_data = {
            'count_totals': [0, 0, 0, 0, 0, 0, 0],
            'datas': []
        }

        for secao in relatorio.secoes:
            count_NR = 0
            count_C = 0
            count_PC = 0
            count_NC = 0
            count_NA = 0
            count_total = 0
            count_comments = 0
            media = 0

            for sub in secao.subtopicos:
                count_NR += 1
                final_data['count_totals'][0] += 1

                if sub.status == 'NA':
                    count_NR -= 1
                    count_NA += 1
                    final_data['count_totals'][4] += 1
                elif sub.status == 'NC':
                    count_NC += 1
                    final_data['count_totals'][3] += 1
                elif sub.status == 'PC':
                    count_PC += 1
                    final_data['count_totals'][2] += 1
                elif sub.status == 'C':
                    count_C += 1
                    final_data['count_totals'][1] += 1

                if sub.comentario:
                    count_comments += 1
                    final_data['count_totals'][6] += 1

                count_total += sub.pontuacao
                final_data['count_totals'][5] += sub.pontuacao

            datas = [count_NR, count_C, count_PC, count_NC, count_NA]

            media = (count_total / count_NR) if (count_NR) else 0

            datas = datas + [count_total, count_comments, media]

            final_data['datas'].append(datas)

        return final_data

    '''
    Construção da tabela de pontos
    '''

    def tabela_graph_pontos(self, relatorio, styles):
        table_data = []

        # Headers
        table_data.append([
            Paragraph("Seção", styles),
            Paragraph("NR", styles),
            Paragraph("C", styles),
            Paragraph("PC", styles),
            Paragraph("NC", styles),
            Paragraph("NA", styles),
            Paragraph("PT", styles),
            Paragraph("OBS", styles),
            Paragraph("ME", styles),
        ])

        count_totals = [0, 0, 0, 0, 0, 0, 0]

        for secao in relatorio.secoes:
            count_NR = 0
            count_C = 0
            count_PC = 0
            count_NC = 0
            count_NA = 0
            count_total = 0
            count_comments = 0
            media = 0

            # Contagens dos pontos
            for sub in secao.subtopicos:
                count_NR += 1
                count_totals[0] += 1

                if sub.status == 'NA':
                    count_NR -= 1
                    count_NA += 1
                    count_totals[4] += 1
                elif sub.status == 'NC':
                    count_NC += 1
                    count_totals[3] += 1
                elif sub.status == 'PC':
                    count_PC += 1
                    count_totals[2] += 1
                elif sub.status == 'C':
                    count_C += 1
                    count_totals[1] += 1

                if sub.comentario:
                    count_comments += 1
                    count_totals[6] += 1

                count_total += sub.pontuacao
                count_totals[5] += sub.pontuacao

            # Organização dos dados
            datas = [count_NR, count_C, count_PC, count_NC, count_NA]
            # Cálculo das médias
            media = (count_total / count_NR) if (count_NR) else 0
            # Adição dos dados nas linhas
            # Colunas
            paragraph_columns = [secao.topico] + \
                [Paragraph(str(data)) for data in datas]
            paragraph_columns.append(count_total)
            paragraph_columns.append(count_comments)
            paragraph_columns.append("{0:.2f}".format(media))
            # Adição da linha
            table_data.append(paragraph_columns)
        # Linha TOTAIS
        table_data.append(
            [Paragraph('TOTAIS')] +
            [(nums) for nums in count_totals] + ['-']
        )
        # Linha PERCENTUAIS
        table_data.append(
            [Paragraph('PERCENTUAIS')] +
            [("{0:.2f}%".format((nums / count_totals[0]) * 100) if count_totals[0] else 0)
             for nums in count_totals[0:5]] + ['-', '-', '-']
        )

        return table_data

    '''
    Legendas do gráfico
    '''
    @staticmethod
    def add_legend(draw_obj, chart, data):
        legend = Legend()
        legend.alignment = 'right'
        legend.x = 90
        legend.y = 20
        legend.colorNamePairs = Auto(obj=chart)
        draw_obj.add(legend)

    def pie_chart_with_legend(self):
        data = self.get_pontos()
        sum_pontos = 0
        for x in data['count_totals'][1:5]:
            sum_pontos += x

        # Espaço de renderização
        drawing = Drawing(width=400, height=200)
        # Propriedades do gráfico
        my_title = String(
            self.width/4, 200, 'Proporções das Pontuações', fontSize=14)
        pie = Pie()
        pie.sideLabels = True
        pie.x = 150
        pie.y = 65
        pie.data = data['count_totals'][1:5]
        pie.labels = [
            'C: Conforme {0:.2f}%'.format(
                (data['count_totals'][1]/sum_pontos) * 100 if sum_pontos > 0 else 0),
            'PC: Parcialmente Conforme {0:.2f}%'.format(
                data['count_totals'][2]/sum_pontos * 100 if sum_pontos > 0 else 0),
            'NC: Não Conforme {0:.2f}%'.format(
                data['count_totals'][3]/sum_pontos * 100 if sum_pontos > 0 else 0),
            'NA: Não se Aplica {0:.2f}%'.format(
                data['count_totals'][4]/sum_pontos * 100 if sum_pontos > 0 else 0)
        ]
        pie.slices.strokeWidth = 0.5
        # Adição do gráfico para renderização
        drawing.add(my_title)
        drawing.add(pie)
        self.add_legend(drawing, pie, data)
        return drawing

    def draw_graph(self):
        d = Drawing(280, 250)
        graph_data = self.get_pontos()
        labels = ['C', 'PC', 'NC', 'NA']

        graph = VerticalBarChart()
        graph.data = graph_data['count_totals']
        graph.barLabels = labels

        d.add(graph)
        d.save()

        return d

    '''
    É feita a Query através do código passado para o criador do Relatório.
    '''

    def paragraph_space(self):
        return Spacer(1, 0.9*cm)

    def section_space(self):
        return Spacer(1, 1.7*cm)

    def printReport(self):
        # Utilizamos o buffer do init
        buffer = self.buffer
        relatorio = Avaliacao.objects.get(codigo=self.cod_relatorio)

        # Linhas de cada seção
        ANEXOS = ['ANEXO {}'.format(chr(int(ord('A')) + i))
                  for i in range(len(relatorio.secoes))]

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
        styles.add(
            ParagraphStyle(
                'centered_title',
                parent=styles['Heading1'],
                alignment=TA_CENTER,
                fontSize=17,
                textTransform='uppercase'
            )
        )

        # Estilo Customizado para Table Header.
        # Podemos utilizar o nome como índice para acessar (nesse caso:
        # TableHeader)
        styles.add(ParagraphStyle(
            name="TableHeader", fontSize=11, alignment=TA_LEFT)
        )

        # Logo Famil

        basedir = os.getcwd()
        # Base directory

        go_to_dir = os.path.dirname(basedir)
        # pathname = os.path.join(go_to_dir, "frontend",
        #                         "src", "assets", "logo-2021-v2.png")
        # elements.append(
        #     Image(pathname, width=1.5*cm, height=2.2*cm))

        elements.append(self.paragraph_space())

        elements.append(
            Paragraph('PROGRAMA DE ACREDITAÇÃO DA SAÚDE ASSISTENCIAL MILITAR (PASAM)',
                      styles['centered_title'])
        )

        elements.append(self.paragraph_space())

        # Adição de elementos do Banco de Dados

        # Título
        elements.append(
            Paragraph("AVALIAÇÃO DO {}".format(relatorio.nomeHospital),
                      styles['centered_title']))

        elements.append(self.section_space())

        # Avaliadores
        table_data = self.tabela_users(styles['TableHeader'])

        wh_table = Table(table_data)

        # Estilização da Tabela - Seleciona as células por um range
        # (x1, y1), (x2, y2)
        wh_table.setStyle(
            TableStyle([
                ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.black),
                ('BOX', (0, 0), (-1, -1), 0.5, colors.black),
                ('VALIGN', (0, 0), (-1, 0), 'MIDDLE'),
                ('BACKGROUND', (0, 0), (-1, 0), colors.gray)
            ])
        )

        elements.append(wh_table)
        elements.append(self.section_space())

        # Seção 1
        elements.append(Paragraph("{}. {}".format(
            "1", self.list_items_relat["1"]), styles['Heading2']))
        elements.append(Paragraph(self.finalidade_aval(self.cod_relatorio)))

        elements.append(self.section_space())

        # Seção 2
        elements.append(Paragraph("{}. {}".format(
            "2", self.list_items_relat["2"]), styles['Heading2']))
        elements.append(Paragraph(self.objetivos_aval(self.cod_relatorio)))

        elements.append(self.section_space())

        # Seção 3
        elements.append(Paragraph("{}. {}".format(
            "3", self.list_items_relat["3"]), styles['Heading2']))

        # Tabela com resumo dos dados + Gráfico
        table_data = self.tabela_graph_pontos(
            relatorio, styles['TableHeader'])

        aval_sucinta = self.aval_sucinta(table_data)

        elements.append(Paragraph(aval_sucinta))

        elements.append(self.paragraph_space())

        wh_table = Table(table_data)

        # Estilização da Tabela - Seleciona as células por um range
        # (x1, y1), (x2, y2)
        wh_table.setStyle(
            TableStyle([
                ('INNERGRID', (0, 0), (-1, -1), 0.25, colors.black),
                ('BOX', (0, 0), (-1, -1), 0.5, colors.black),
                ('VALIGN', (0, 0), (-1, 0), 'MIDDLE'),
                ('BACKGROUND', (0, 0), (-1, 0), colors.gray)
            ])
        )

        elements.append(wh_table)
        elements.append(self.section_space())

        # Gráfico

        graph = self.pie_chart_with_legend()
        elements.append(graph)

        elements.append(self.paragraph_space())
        # Nova Página
        elements.append(PageBreak())

        # ANEXOS
        index = 0
        for secs in relatorio.secoes:
            # Título
            elements.append(Paragraph(
                ANEXOS[index],
                styles['centered_title'])
            )

            index += 1

            elements.append(Paragraph("Fatos Observados em {}".format(
                secs.topico), styles['centered_title']))

            titulo = "{}. {}".format(secs.id, secs.topico)
            # Tópicos
            elements.append(Paragraph(titulo, styles['Heading1']))

            for sub in secs.subtopicos:
                if sub.status != 'NA':
                    # Subtópicos
                    subtitulo = "{}.{}. {}".format(secs.id, sub.id, sub.nome)
                    elements.append(Paragraph(subtitulo, styles['Heading2']))

                    elements.append(Paragraph("Status: {}".format(sub.status)))
                    elements.append(
                        Paragraph("Pontuação: {}".format(sub.pontuacao)))
                    elements.append(Paragraph(
                        "Comentários: {}".format(sub.comentario)
                    ))

            elements.append(PageBreak())

        doc.build(
            elements,
            onFirstPage=self._footer,
            onLaterPages=self._footer,
            canvasmaker=NumberedCanvas)

        # O pdf é formado pelos bytes do buffer
        pdf = buffer.getvalue()

        # Close the PDF object cleanly, and we're done.
        buffer.close()
        return pdf
