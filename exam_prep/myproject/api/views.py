from django.shortcuts import render
from rest_framework.decorators import api_view #<-- for FBV
from rest_framework.response import Response
from models import Author, Book
from serializers import AuthorSerializer, BookSerializer
#----------------------------------------------------------
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListCreateAPIView


# FBV ------------------------------------------------------- 
@api_view(['GET', 'POST'])
def author(request):
    if request.method == 'GET':
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many = True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = AuthorSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
@api_view(['GET', 'POST'])
def BookView(request):
    if request.method == 'GET':
        books = Book.objects.all()
        serializer = BookSerializer(books, many = True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = BookSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    

def BookDetailView():
    return 
def AUthorDetailView():
    return


#CBV-----------------------------------------------------
class AuthorViewClass(APIView):
    def get(self, request):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many = True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = AuthorSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AUthorDetailView(APIView):
    def get(self, request, pk):
        author = Author.objects.get(pk = pk)
        serializer = AuthorSerializer(author)
        return Response(serializer.data)
    
    def post(self, request, pk):
        author = Author.objects.get(pk = pk)
        serializer = AuthorSerializer(author)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

#Generics



