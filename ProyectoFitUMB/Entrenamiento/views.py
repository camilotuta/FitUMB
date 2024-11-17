from django.shortcuts import render
from django.http import HttpResponse

def entrenamiento(request):
    return render(request,'entrenamiento.html')
