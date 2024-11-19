from django.db import models
from Entrenamiento.models import RUTINAS
from Nutricion.models import RECETAS

class USUARIOS(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    objetivo = models.CharField(max_length=100)
    correo = models.CharField(max_length=100)
    contrasenia = models.CharField(max_length=100)
    fecha_asig_rutina = models.DateField()
    fecha_asig_recetas = models.DateField()
    rutina_dia = models.ForeignKey(RUTINAS, on_delete=models.CASCADE)
    receta_desayuno = models.ForeignKey(RECETAS, on_delete=models.CASCADE, related_name='Desayuno')
    receta_almuerzo = models.ForeignKey(RECETAS, on_delete=models.CASCADE, related_name='Almuerzo')
    receta_cena = models.ForeignKey(RECETAS, on_delete=models.CASCADE, related_name='Cena')

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.nombre)

class PROGRESOS_NUTRICION(models.Model):
    usuario_id = models.ForeignKey(USUARIOS, on_delete=models.CASCADE)
    fecha = models.DateField()
    status_desayuno = models.BooleanField(default=False)
    status_almuerzo = models.BooleanField(default=False)
    status_cena = models.BooleanField(default=False)
    dia_completado = models.BooleanField(default=False)
    fecha_ult_actualizacion = models.DateField()

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.usuario_id)

class PROGRESOS_ENTRENAMIENTO (models.Model):
    usuario_id = models.ForeignKey(USUARIOS, on_delete=models.CASCADE)
    semana_del_anio = models.PositiveIntegerField()
    anio = models.PositiveIntegerField()
    rutina_1 = models.BooleanField(default=False)
    rutina_2 = models.BooleanField(default=False)
    rutina_3 = models.BooleanField(default=False)
    semana_completada = models.BooleanField(default=False)
    fecha_ult_actualizacion = models.DateField()

    def __str__(self):
        nombre = "({0}) {1}"
        return nombre.format(self.id, self.usuario_id)