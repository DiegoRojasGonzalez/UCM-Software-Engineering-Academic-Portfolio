from django.shortcuts import render

# Create your views here.

# Index View 
def loadIndex(request):
    return render(request, 'index.html')
