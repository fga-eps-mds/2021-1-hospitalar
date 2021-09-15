from rest_framework import routers
<<<<<<< HEAD
from models.geracaoPdf.views import GeracaoPdfView
=======
>>>>>>> 7ab23904b053c5a0ad6f68b4925b44ce42f7da8a
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

    router.register(r'avaliacao', AvaliacaoViews.AvaliacaoView)

    return router
