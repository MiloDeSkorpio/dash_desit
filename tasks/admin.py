from django.contrib import admin
from .models import Incidencia, Usuario, Tema, Estatus, Prioridad
# Register your models here.

admin.site.register(Incidencia)
admin.site.register(Usuario)
admin.site.register(Tema)
admin.site.register(Estatus)
admin.site.register(Prioridad)

