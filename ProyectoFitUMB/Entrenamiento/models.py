from django.db import models

# Create your models here.
class RUTINAS(models.Model):
    nombre_rutina = models.CharField(max_length=20)
    objetivo_relacionado = models.CharField(max_length=20)

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.nombre_rutina)

class EJERCICIOS(models.Model):
    nombre_ejercicio = models.CharField(max_length=200)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to='imagenes/Ejercicios/')
    repeticiones = models.IntegerField()
    series = models.IntegerField()
    descanso_ideal = models.CharField(max_length=20)
    objetivo_relacionado = models.CharField(max_length=100)

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.nombre_ejercicio)

class RUTINA_EJERCICIOS(models.Model):
    rutina_id = models.ForeignKey(RUTINAS, on_delete=models.CASCADE)
    ejercicio_id = models.ForeignKey(EJERCICIOS, on_delete=models.CASCADE)
    completado = models.BooleanField(default=False)

    def __str__(self):
        nombre = "({0}) {1} - {2}"
        return nombre.format(self.id, self.rutina_id, self.ejercicio_id)