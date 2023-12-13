

from requests import Response
from rest_framework import viewsets
from .serializer import IncidenciaSerializer,UsuarioSerializer, TemaSerializer, EstatusSerializer, PrioridadSerializer, LoginSerializer
from .models import Incidencia, Usuario, Tema, Estatus, Prioridad
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import login, authenticate

# Create your views here.
class IncidenciaView(viewsets.ModelViewSet):
    serializer_class = IncidenciaSerializer
    queryset = Incidencia.objects.all()
# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()
# Create your views here.
class TemaView(viewsets.ModelViewSet):
    serializer_class = TemaSerializer
    queryset = Tema.objects.all()
# Create your views here.
class EstatusView(viewsets.ModelViewSet):
    serializer_class = EstatusSerializer
    queryset = Estatus.objects.all()
# Create your views here.
class PrioridadView(viewsets.ModelViewSet):
    serializer_class = PrioridadSerializer
    queryset = Prioridad.objects.all()

class LoginView(viewsets.ModelViewSet):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = authenticate(
            request,
            email=serializer.validated_data['email'],
            password=serializer.validated_data['password']
        )

        if user is None:
            raise AuthenticationFailed('Incorrect username or password.')

        login(request, user)
        return Response({
            'token': user.auth_token.key
        })
    


        



