from django.urls import path
from models.Usuario.views import(
    LoginView,
    RegistrarView,
    UsuarioView,
    RegistrarAdminView,
    UsuarioListView,
    UsuarioDetailView
)
from knox import views as knox_views

urlpatterns = [
    path('registrar/', RegistrarView.as_view()),
    path('registrar_admin/', RegistrarAdminView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UsuarioView.as_view()),
    path('user/<int:pk>/', UsuarioDetailView.as_view()),
    path('user_list/', UsuarioListView.as_view()),
    path('logout/', knox_views.LogoutView.as_view())
]
