from django.contrib import admin
from .models import RECETAS
from .models import RECETAS_ALIMENTOS
from .models import ALIMENTOS

admin.site.register(RECETAS)

admin.site.register(RECETAS_ALIMENTOS)

admin.site.register(ALIMENTOS)
