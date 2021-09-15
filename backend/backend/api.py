from rest_framework import routers
from models.geracaoPdf.views import GeracaoPdfView
from models.avaliacao import views as AvaliacaoViews


def create_api():
    '''
    Função que retorna um objeto que contém as urls do backend.
    Para incluir uma nova url utilize router.register
    de acordo com o padrão escrito no markdown do backend.

    @see https://www.django-rest-framework.org/api-guide/routers/#using-include-with-routers
    '''

    router = routers.DefaultRouter()
<<<<<<< HEAD
    router.register(r'geracao', GeracaoPdfView, 'geracaoPdf')
=======

>>>>>>> #59 - Conclusão-da-primeira-classe
    router.register(r'avaliacao', AvaliacaoViews.AvaliacaoView)

    return router
