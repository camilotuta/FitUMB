from django.shortcuts import render
from django.http import HttpResponse

#Paginas
def index(request):
    return render(request,'home.html')

def registro(request):
    return render(request,'registro.html')

def login(request):
    return render(request,'login.html')

def nutricion(request):
    return render(request,'nutricion.html')

def entrenamiento(request):
    return render(request,'entrenamiento.html')

