from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import models, serializers
# Create your views here.

class ExtratoViewSet(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.all()
    serializer_class = ''

# Credito e debito poderiam ser as mesmas funções, recebendo o parametro tipo do front e executando so o ser tipo (debito ou credito)
# Porem, criei 2 funções para possiveis alterações futuras, assim, cada uma sendo tratada separadamente

class RealizarCreditoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Usuario.objects.none()
    serializer_class = ''

    def list(self, request):
        # Recebo quem fez a transação, o valor e a descrição
        print('teste')

class RealizarDebitoViewSet(viewsets.ModelViewSet):
    queryset = models.Usuario.objects.none()
    serializer_class = ''

    def list(self, request):
        # Recebo quem fez a transação, o valor e a descrição
        params = [request.query_params[param] for param in self.params]
        print('teste')
