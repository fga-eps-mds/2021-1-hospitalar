from rest_framework import routers
from models.Avaliacao.views import AvaliacaoView
from models.Usuario.views import UsuarioView , LoginView
'''
    Função que retorna um objeto que contém as urls do backend.
    Para incluir uma nova url utilize router.register
    de acordo com o padrão escrito no markdown do backend.

    @see https://www.django-rest-framework.org/api-guide/routers/#using-include-with-routers
'''


def create_api():
    router = routers.DefaultRouter()
    router.register(r'avaliacao', AvaliacaoView)
    router.register(r'usuario', UsuarioView)
    router.register(r'auth', LoginView)
    return router
