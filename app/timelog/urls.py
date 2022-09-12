from django.urls import path
from . import views


urlpatterns = [
    path('logs/', views.logs, name="logs"),
    path('log/<int:pk>/', views.log, name="log"),
]