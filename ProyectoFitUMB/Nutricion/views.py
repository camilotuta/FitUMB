from django.shortcuts import render
from django.http import HttpResponse

def nutricion(request):
    return render(request,'nutricion.html')
