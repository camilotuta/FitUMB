from django.db import models

# Create your models here.
class RECETAS(models.Model):
    nombre_receta = models.CharField(max_length=200)
    categoria = models.CharField(max_length=20)
    instrucciones = models.TextField()
    objetivo_relacionado = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to='imagenes/Recetas')

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.nombre_receta)

class ALIMENTOS(models.Model):
    nombre_alimento = models.CharField(max_length=20)
    tipo_alimento = models.CharField(max_length=20)

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.nombre_alimento)

class RECETAS_ALIMENTOS (models.Model):
    receta_id = models.ForeignKey(RECETAS, on_delete=models.CASCADE)
    alimento_id = models.ForeignKey(ALIMENTOS, on_delete=models.CASCADE)
    unidad_medida = models.CharField
    cantidad = models.FloatField

    def __str__(self):
        nombre = "({0}) {1} - {2}"
        return nombre.format(self.id, self.receta_id, self.alimento_id)