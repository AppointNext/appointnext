
from django.urls import path,include
from .views import register

urlpatterns = [
    path('register/', register, name='register'),
]