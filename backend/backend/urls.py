from django.contrib import admin
from django.urls import path, include
from .api import create_api

router = create_api()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
