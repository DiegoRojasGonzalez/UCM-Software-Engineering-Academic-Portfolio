from django.contrib import admin
from django.urls import path
from Customer.views import *
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView )


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Customer   
    path('customers/', customers),# ['GET']
    path('customer/', customer), # [POST] 
    path('customer/<int:id>/', customer), # [GET{id}, PUT{id}, DELETE{id}]
    
    # Address
    path('address/', address), # ['POST']
    path('address/<int:id>/', address), # [GET{id},  PUT{id}, DELETE{id}]


]
