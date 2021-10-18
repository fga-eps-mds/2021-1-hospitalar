from reportlab.graphics.charts.legends import Legend
from reportlab.graphics.shapes import Drawing, String
from reportlab.lib.validators import Auto
from reportlab.platypus import SimpleDocTemplate,\
    Paragraph,\
    Spacer,\
    Table,\
    TableStyle,\
    PageBreak

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
from reportlab.lib import colors
from ..models import Avaliacao

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
    def __init__(self, buffer, pagesize):
        self.buffer = buffer
        if pagesize == 'A4':
            self.pagesize = A4
        elif pagesize == 'letter':
            self.pagesize = letter
        self.width, self.height = self.pagesize

    def printReport(self):
        buffer = self.buffer

        doc = SimpleDocTemplate(
            buffer,
            rightMargin=72,
            leftMargin=72,
            topMargin=72,
            botomMargin=72,
            pagesize=self.pagesize
        )

        elements = [Spacer(1, 2*inch)]

        styles = getSampleStyleSheet()
        styles.add(ParagraphStyle('centered', alignment=TA_CENTER))

        elements.append(Paragraph("Meu Teste 1", styles['Heading1']))
        for i in range(100):
            bogustext = ("This is Paragraph number %s.  " % i) * 20
            p = Paragraph(bogustext, styles['Normal'])
            elements.append(p)
            elements.append(Spacer(1, 0.2*inch))

        doc.build(elements)

        # p.drawString(100, 100, "Hello world.")
        pdf = buffer.getvalue()

        # Close the PDF object cleanly, and we're done.
        buffer.close()
        return pdf
