from rest_framework import permissions

from .models import Usuario

class IsVerified(permissions.BasePermission):
    message = 'Email da conta não foi verificado.'

    def has_permission(self, request, view):
        email = request.data['email']

        if not Usuario.objects.filter(email=email).exists():
            return True

        user = Usuario.objects.get(email=email)
        if user.is_verified:
            return True
        return False