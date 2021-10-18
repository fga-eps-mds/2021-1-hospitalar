from django.contrib import admin
from django.urls import path, include
from .api import create_api
from models.Usuario.views import CustomTokenObtainPairView

router = create_api()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('auth/', CustomTokenObtainPairView.as_view() , name="auth")
]
