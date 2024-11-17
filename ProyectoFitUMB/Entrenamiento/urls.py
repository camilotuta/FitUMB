from django.urls import path
from . import views

urlpatterns = [
    path('entrenamiento/',views.entrenamiento, name='entrenamiento'),
]