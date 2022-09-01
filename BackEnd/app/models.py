from django.db import models

# Create your models here.

class Usuario(models.Model):
    id = models.BigIntegerField(primary_key=True)
    nome = models.TextField()
    numero_conta = models.FloatField()
    saldo = models.FloatField()

class Transacao(models.Model):
    id = models.BigIntegerField(primary_key=True)
    descricao = models.TextField()
    tipo = models.TextField()
    id_usuairo = models.ForeignKey(Usuario, on_delete=models.RESTRICT, db_column='id_usuairo')