from django.contrib import admin
from .models import RUTINAS
from .models import RUTINA_EJERCICIOS
from .models import EJERCICIOS

admin.site.register(RUTINAS)

admin.site.register(RUTINA_EJERCICIOS)

admin.site.register(EJERCICIOS)