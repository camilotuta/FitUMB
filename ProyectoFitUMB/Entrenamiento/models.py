from django.db import models

# Create your models here.
class RUTINAS(models.Model):
    nombre_rutina = models.CharField(max_length=20)
    objetivo_relacionado = models.CharField(max_length=20)

class EJERCICIOS(models.Model):
    nombre_ejercicio = models.CharField(max_length=20)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='imagenes/')
    repeticiones = models.IntegerField()
    series = models.IntegerField()
    descanso_ideal = models.CharField(max_length=20)
    objetivo_relacionado = models.CharField(max_length=100)

class RUTINA_EJERCICIOS(models.Model):
    rutina_id = models.ForeignKey(RUTINAS, on_delete=models.CASCADE)
    ejercicio_id = models.ForeignKey(EJERCICIOS, on_delete=models.CASCADE)
    completado = models.BooleanField(default=False)