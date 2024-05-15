from django.http import HttpResponse

def index(request):
    return HttpResponse("Index app1")

def about(request):
    return HttpResponse("About app1")
