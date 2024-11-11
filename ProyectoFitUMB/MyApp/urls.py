from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('registro/',views.registro),
    path('login/',views.login),
    path('nutricion/',views.nutricion),
    path('entrenamiento/',views.entrenamiento),
]