from django.contrib import admin
from django.urls import path
from Customer.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    # Customer   
    path('customers/', customers),# ['GET']
    path('customer/', customer), # [POST] 
    path('customer/<int:id>/', customer), # [GET{id}, PUT{id}, DELETE{id}]
    
    # Address
    path('address/', address), # ['POST']
    path('address/<int:id>/', address), # [GET{id},  PUT{id}, DELETE{id}]


]
