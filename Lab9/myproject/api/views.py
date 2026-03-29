from django.shortcuts import render
from .models import Product, Category
from django.http import JsonResponse


from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.id 
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)

def product_list(request, id):
    try:
        p = Product.objects.get(id = id)
        data = {
              "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.id
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Prodct not found"}, status = 404)
    
    
def category_list(request):
    categories = Category.objects.all()
    data = [{
        "id": c.id,
        "name" : c.name
    }
    for c in categories
    ]
    return JsonResponse(data, safe = False)

def category_detail(request, id):
    try:
        c = Category.objects.get(id = id)
        data = {"id": c.id, "name" : c.name}
        return JsonResponse(data)
    except:
        return JsonResponse({"error" : "Category not found"}, status = 404)

def category_products(request, id):
    try:
        products = Product.objects.filter(category_id=id)
        data = [
            {
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "description": p.description,
                "count": p.count,
                "is_active": p.is_active,
                "category": p.category.id
            }
            for p in products
        ]
        return JsonResponse(data, safe=False)
    except:
        return JsonResponse({"error": "Error"}, status=400)
    

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
