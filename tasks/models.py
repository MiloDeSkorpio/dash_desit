from django.db import models
from django.contrib.auth.models import AbstractBaseUser
class Prioridad(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre

class Estatus(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre
    
class Tema(models.Model):
    nombre = models.CharField(max_length=50)
    def __str__(self):
        return self.nombre

class Usuario(AbstractBaseUser):
    nombre = models.CharField(max_length=50)
    appellidoP = models.CharField(max_length=50)
    appellidoM = models.CharField(max_length=50)
    nombreAbr = models.CharField(max_length=4, default='')
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=16)
    username = None
    last_login = None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
     
# Create your models here.
class Incidencia(models.Model):
    # Define los campos necesarios para representar una incidencia.
    actividad = models.CharField(max_length=100)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_inicio = models.DateTimeField(auto_now=True)
    fecha_entrega = models.DateTimeField(auto_now=True)
    tiempo_elaboracion = models.IntegerField(default=0)
    dias_retraso = models.IntegerField(default=0)
    descripcion = models.TextField(max_length=240)
    observaciones = models.TextField(default="")
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE )  # Relación ForeignKey
    id_tema = models.ForeignKey(Tema, on_delete=models.CASCADE )  # Relación ForeignKey
    id_prioridad = models.ForeignKey(Prioridad, on_delete=models.CASCADE )  # Relación ForeignKey
    id_estatus = models.ForeignKey(Estatus, on_delete=models.CASCADE )  # Relación ForeignKey
    # Puedes agregar más campos según tus necesidades.
    def __str__(self):
        return self.actividad