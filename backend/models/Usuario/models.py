from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self,
                    email,
                    nome,
                    funcao,
                    organizacao,
                    password):

        if not email or not password:
            raise ValueError('Usuários devem ter email e senha')

        user = self.model(
            email=self.normalize_email(email),
            nome=nome,
            funcao=funcao,
            organizacao=organizacao
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,
                         email,
                         nome,
                         funcao,
                         organizacao,
                         password):
        user = self.create_user(
            email,
            nome,
            funcao,
            organizacao,
            password,
        )

        user.admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(unique=True)

    nome = models.TextField()
    funcao = models.TextField()
    organizacao = models.TextField()
    admin = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_admin(self):
        return self.admin
