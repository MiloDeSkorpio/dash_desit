from rest_framework import serializers,validators
from django.contrib.auth.hashers import make_password
from .models import Incidencia, Usuario, Tema, Estatus, Prioridad
from rest_framework.validators import UniqueValidator

class IncidenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incidencia
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def set_password(self, password):
        self.password = make_password(password)
        self.save()
    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class TemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tema
        fields = '__all__'

class EstatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estatus
        fields = '__all__'

class PrioridadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prioridad
        fields = '__all__'

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators = [
        validators.UniqueValidator(queryset=Usuario.objects.all())
    ]
    )
    password = serializers.CharField(
        required=True,
        min_length=8
    )
    class Meta:
        model = Usuario
        fields = ('email', 'password')
        unique_together = ('email',)