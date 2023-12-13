from django.urls import path, include
from rest_framework import routers
from tasks import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'incidencia',views.IncidenciaView,'incidencia')
router.register(r'usuario',views.UsuarioView,'usuario')
router.register(r'tema',views.TemaView,'tema')
router.register(r'estatus',views.EstatusView,'estatus')
router.register(r'prioridad',views.PrioridadView,'prioridad')
router.register(r'login',views.LoginView,'login')
urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('docs/',include_docs_urls(title='Incidencias API')),
]