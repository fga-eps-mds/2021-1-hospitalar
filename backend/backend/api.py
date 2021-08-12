from rest_framework import routers
from models.todo import views as TodoViews
from models.pessoa import views as PessoaViews


def create_api():
    router = routers.DefaultRouter()

    router.register(r'todo', TodoViews.TodoView)
    router.register(r'pessoa', PessoaViews.PessoaView)

    return router
