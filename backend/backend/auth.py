from django.urls import path, include
from models.Usuario.views import LoginView, RegistrarView, UsuarioView, RegistrarAdminView
from knox import views as knox_views

urlpatterns = [
    path('', include('knox.urls')),
    path('registrar/', RegistrarView.as_view()),
    path('registrar_admin/', RegistrarAdminView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UsuarioView.as_view()),
    path('logout/', knox_views.LogoutView.as_view())
]
