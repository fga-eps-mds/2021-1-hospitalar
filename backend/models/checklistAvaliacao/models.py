from django.db import models

# Create your models here. # MODELOS DJANGO

class Item(models.Model):
    ItemId = models.AutoField(primary_key=True) # Gera uma chave disponível automaticamente
    Qualificacao = models.CharField(max_length=500, default='VALOR PADRÃO') # String
    Avaliacao = models.CharField(max_length=500, default='VALOR PADRÃO' ) # String
    Nota = models.IntegerField(default='NULL') # Int
    Comentario  = models.TextField(max_length=1000, default='VALOR PADRÃO') # Texto
    Status  = models.CharField(max_length=500, default='VALOR PADRÃO')  # String
    
class Checklist(models.Model):
    ChecklistId = models.AutoField(primary_key=True) # ID
    Secao = models.CharField(max_length=500, default='VALOR PADRÃO') # char

class Avaliacao(models.Model):
    AvaliacaoId = models.AutoField(primary_key=True) # ID
    Analise = models.CharField(max_length=500, default='VALOR PADRÃO') # String
    Hospital = models.CharField(max_length=500, default='VALOR PADRÃO') # String
    Responsavel = models.CharField(max_length=500, default='VALOR PADRÃO') # String
    

