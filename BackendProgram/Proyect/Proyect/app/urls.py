from django.urls import path
from .views import loadIndex

urlpatterns = [
    path('indexView/', loadIndex, name='indexView'),
]
