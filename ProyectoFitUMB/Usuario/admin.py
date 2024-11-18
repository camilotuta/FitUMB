from django.contrib import admin
from .models import USUARIOS
from .models import PROGRESOS_NUTRICION
from .models import PROGRESOS_ENTRENAMIENTO

admin.site.register(USUARIOS)

admin.site.register(PROGRESOS_NUTRICION)

admin.site.register(PROGRESOS_ENTRENAMIENTO)
