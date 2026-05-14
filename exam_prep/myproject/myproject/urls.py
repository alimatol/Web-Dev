"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
#from .views import home, about

urlpatterns = [
    path('admin/', admin.site.urls),

    """
     path('', home),
     path(route, view, kwargs=None, name=None)

     URL → View → Response

     from django.http import HttpResponse

        ----IN VIEWS.PY----

        def home(request):
            return HttpResponse("Home page")

        def about(request):
            return HttpResponse("About page")
    -----------------------------------------------
    path('post/<int:id>/', post_detail) <-- DYNAMIC 
        def post_detail(request, id):
            return HttpResponse(f"Post {id}")

    """
    #path('blog/', include('api.urls')),
]
