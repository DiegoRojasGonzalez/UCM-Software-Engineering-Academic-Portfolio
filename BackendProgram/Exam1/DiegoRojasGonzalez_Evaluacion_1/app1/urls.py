from django.urls import path
from .views import index , about

urlpatterns = [
    path('', index, name='app1_index'),
    path('about', about ),

]
