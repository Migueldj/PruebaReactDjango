from . import views
from django.urls import path

urlpatterns = [
    path('prueba/', views.prueba, name="prueba"),
]