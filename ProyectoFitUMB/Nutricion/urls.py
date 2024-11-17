from django.urls import path
from . import views

urlpatterns = [
    path('nutricion/',views.nutricion, name='nutricion'),
]