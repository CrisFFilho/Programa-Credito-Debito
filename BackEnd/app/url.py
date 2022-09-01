from django.urls import path, include
from rest_framework import routers

from app import views

app_name = 'app'

router = routers.DefaultRouter()

router.register('extrato', views.ExtratoViewSet)
router.register('credito', views.RealizarCreditoViewSet)
router.register('debito', views.RealizarDebitoViewSet)

urlpatterns = [
    path('', include(router.urls))
]