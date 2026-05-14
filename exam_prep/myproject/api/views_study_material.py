# =========================================================
# FULL DJANGO REST FRAMEWORK GENERICS EXAMPLE
# =========================================================

# =========================================================
# models.py
# =========================================================

from django.db import models


class Author(models.Model):

    name = models.CharField(max_length=100)

    age = models.IntegerField()

    def __str__(self):
        return self.name


class Book(models.Model):

    title = models.CharField(max_length=100)

    price = models.IntegerField()

    pages = models.IntegerField()

    published = models.BooleanField(default=True)

    author = models.ForeignKey(
        Author,
        on_delete=models.CASCADE,
        related_name='books'
    )

    def __str__(self):
        return self.title


# =========================================================
# serializers.py
# =========================================================

from rest_framework import serializers
from .models import Author, Book


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'


class BookSerializer(serializers.ModelSerializer):

    author_name = serializers.CharField(
        source='author.name',
        read_only=True
    )

    class Meta:
        model = Book
        fields = '__all__'

    # -----------------------------------------------------
    # FIELD VALIDATION
    # -----------------------------------------------------

    def validate_price(self, value):

        if value < 0:

            raise serializers.ValidationError(
                "Price cannot be negative"
            )

        return value

    def validate_pages(self, value):

        if value <= 0:

            raise serializers.ValidationError(
                "Pages must be positive"
            )

        return value

    # -----------------------------------------------------
    # OBJECT VALIDATION
    # -----------------------------------------------------

    def validate(self, data):

        price = data.get('price')

        pages = data.get('pages')

        if price and pages:

            if price > 100000 and pages < 20:

                raise serializers.ValidationError(
                    "Too expensive for small book"
                )

        return data

    # -----------------------------------------------------
    # CREATE
    # -----------------------------------------------------

    def create(self, validated_data):

        book = Book.objects.create(
            **validated_data
        )

        return book

    # -----------------------------------------------------
    # UPDATE
    # -----------------------------------------------------

    def update(self, instance, validated_data):

        instance.title = validated_data.get(
            'title',
            instance.title
        )

        instance.price = validated_data.get(
            'price',
            instance.price
        )

        instance.pages = validated_data.get(
            'pages',
            instance.pages
        )

        instance.published = validated_data.get(
            'published',
            instance.published
        )

        instance.author = validated_data.get(
            'author',
            instance.author
        )

        instance.save()

        return instance


# =========================================================
# views.py
# =========================================================

from rest_framework.generics import (
    GenericAPIView,
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView,
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveDestroyAPIView,
    RetrieveUpdateDestroyAPIView
)

from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

from .models import Author, Book
from .serializers import (
    AuthorSerializer,
    BookSerializer
)


# =========================================================
# PAGINATION
# =========================================================

class BookPagination(PageNumberPagination):

    page_size = 3

    page_size_query_param = 'page_size'

    max_page_size = 100


# =========================================================
# GENERIC API VIEW
# =========================================================

class BookGenericAPIView(GenericAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    # -----------------------------------------------------
    # GET
    # -----------------------------------------------------

    def get(self, request):

        books = self.get_queryset()

        serializer = self.get_serializer(
            books,
            many=True
        )

        return Response(serializer.data)

    # -----------------------------------------------------
    # POST
    # -----------------------------------------------------

    def post(self, request):

        serializer = self.get_serializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(serializer.data)

        return Response(serializer.errors)

    # -----------------------------------------------------
    # CUSTOM QUERYSET
    # -----------------------------------------------------

    def get_queryset(self):

        queryset = Book.objects.all()

        search = self.request.GET.get('search')

        if search:

            queryset = queryset.filter(
                title__icontains=search
            )

        return queryset

    # -----------------------------------------------------
    # DIFFERENT SERIALIZER
    # -----------------------------------------------------

    def get_serializer_class(self):

        return BookSerializer


# =========================================================
# CREATE API VIEW
# POST ONLY
# =========================================================

class BookCreateAPIView(CreateAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    permission_classes = [IsAuthenticated]

    # -----------------------------------------------------
    # BEFORE SAVE
    # -----------------------------------------------------

    def perform_create(self, serializer):

        serializer.save()


# =========================================================
# LIST API VIEW
# GET ALL ONLY
# =========================================================

class BookListAPIView(ListAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    pagination_class = BookPagination

    # -----------------------------------------------------
    # FILTER
    # -----------------------------------------------------

    def get_queryset(self):

        queryset = Book.objects.all()

        min_price = self.request.GET.get(
            'min_price'
        )

        if min_price:

            queryset = queryset.filter(
                price__gte=min_price
            )

        return queryset


# =========================================================
# RETRIEVE API VIEW
# GET ONE ONLY
# =========================================================

class BookRetrieveAPIView(RetrieveAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer


# =========================================================
# UPDATE API VIEW
# PUT + PATCH ONLY
# =========================================================

class BookUpdateAPIView(UpdateAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    # -----------------------------------------------------
    # BEFORE UPDATE
    # -----------------------------------------------------

    def perform_update(self, serializer):

        serializer.save()


# =========================================================
# DESTROY API VIEW
# DELETE ONLY
# =========================================================

class BookDestroyAPIView(DestroyAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    # -----------------------------------------------------
    # BEFORE DELETE
    # -----------------------------------------------------

    def perform_destroy(self, instance):

        instance.delete()


# =========================================================
# LIST + CREATE
# =========================================================

class BookListCreateAPIView(ListCreateAPIView):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    pagination_class = BookPagination

    # -----------------------------------------------------
    # FILTER QUERYSET
    # -----------------------------------------------------

    def get_queryset(self):

        queryset = Book.objects.all()

        search = self.request.GET.get(
            'search'
        )

        published = self.request.GET.get(
            'published'
        )

        if search:

            queryset = queryset.filter(
                title__icontains=search
            )

        if published:

            queryset = queryset.filter(
                published=True
            )

        return queryset

    # -----------------------------------------------------
    # BEFORE CREATE
    # -----------------------------------------------------

    def perform_create(self, serializer):

        serializer.save()


# =========================================================
# RETRIEVE + UPDATE
# =========================================================

class BookRetrieveUpdateAPIView(
    RetrieveUpdateAPIView
):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    # -----------------------------------------------------
    # BEFORE UPDATE
    # -----------------------------------------------------

    def perform_update(self, serializer):

        serializer.save()


# =========================================================
# RETRIEVE + DELETE
# =========================================================

class BookRetrieveDestroyAPIView(
    RetrieveDestroyAPIView
):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    # -----------------------------------------------------
    # BEFORE DELETE
    # -----------------------------------------------------

    def perform_destroy(self, instance):

        instance.delete()


# =========================================================
# RETRIEVE + UPDATE + DELETE
# =========================================================

class BookRetrieveUpdateDestroyAPIView(
    RetrieveUpdateDestroyAPIView
):

    queryset = Book.objects.all()

    serializer_class = BookSerializer

    permission_classes = [IsAuthenticated]

    # -----------------------------------------------------
    # CUSTOM QUERYSET
    # -----------------------------------------------------

    def get_queryset(self):

        return Book.objects.all()

    # -----------------------------------------------------
    # DIFFERENT SERIALIZER
    # -----------------------------------------------------

    def get_serializer_class(self):

        return BookSerializer

    # -----------------------------------------------------
    # BEFORE CREATE
    # -----------------------------------------------------

    def perform_create(self, serializer):

        serializer.save()

    # -----------------------------------------------------
    # BEFORE UPDATE
    # -----------------------------------------------------

    def perform_update(self, serializer):

        serializer.save()

    # -----------------------------------------------------
    # BEFORE DELETE
    # -----------------------------------------------------

    def perform_destroy(self, instance):

        instance.delete()


# =========================================================
# AUTHOR GENERICS
# =========================================================

class AuthorListCreateAPIView(
    ListCreateAPIView
):

    queryset = Author.objects.all()

    serializer_class = AuthorSerializer


class AuthorDetailAPIView(
    RetrieveUpdateDestroyAPIView
):

    queryset = Author.objects.all()

    serializer_class = AuthorSerializer


# =========================================================
# urls.py
# =========================================================

from django.urls import path

from .views import (

    BookGenericAPIView,

    BookCreateAPIView,
    BookListAPIView,
    BookRetrieveAPIView,
    BookUpdateAPIView,
    BookDestroyAPIView,

    BookListCreateAPIView,

    BookRetrieveUpdateAPIView,
    BookRetrieveDestroyAPIView,
    BookRetrieveUpdateDestroyAPIView,

    AuthorListCreateAPIView,
    AuthorDetailAPIView
)

urlpatterns = [

    # =====================================================
    # GENERIC API VIEW
    # =====================================================

    path(
        'generic/',
        BookGenericAPIView.as_view()
    ),

    # =====================================================
    # SINGLE PURPOSE GENERICS
    # =====================================================

    # CREATE
    path(
        'create/',
        BookCreateAPIView.as_view()
    ),

    # LIST
    path(
        'list/',
        BookListAPIView.as_view()
    ),

    # RETRIEVE
    path(
        'retrieve/<int:pk>/',
        BookRetrieveAPIView.as_view()
    ),

    # UPDATE
    path(
        'update/<int:pk>/',
        BookUpdateAPIView.as_view()
    ),

    # DELETE
    path(
        'delete/<int:pk>/',
        BookDestroyAPIView.as_view()
    ),

    # =====================================================
    # COMBINED GENERICS
    # =====================================================

    # GET ALL + CREATE
    path(
        'books/',
        BookListCreateAPIView.as_view()
    ),

    # GET ONE + UPDATE
    path(
        'books/update/<int:pk>/',
        BookRetrieveUpdateAPIView.as_view()
    ),

    # GET ONE + DELETE
    path(
        'books/delete/<int:pk>/',
        BookRetrieveDestroyAPIView.as_view()
    ),

    # FULL DETAIL CRUD
    path(
        'books/<int:pk>/',
        BookRetrieveUpdateDestroyAPIView.as_view()
    ),

    # =====================================================
    # AUTHORS
    # =====================================================

    path(
        'authors/',
        AuthorListCreateAPIView.as_view()
    ),

    path(
        'authors/<int:pk>/',
        AuthorDetailAPIView.as_view()
    ),
]


# =========================================================
# REQUEST EXAMPLES
# =========================================================

"""
GET ALL BOOKS
--------------
GET:
http://127.0.0.1:8000/books/


GET ONE BOOK
--------------
GET:
http://127.0.0.1:8000/books/1/


CREATE BOOK
--------------
POST:
http://127.0.0.1:8000/books/

BODY:
{
    "title": "Python",
    "price": 1000,
    "pages": 500,
    "published": true,
    "author": 1
}


FULL UPDATE
--------------
PUT:
http://127.0.0.1:8000/books/1/

BODY:
{
    "title": "Updated",
    "price": 2000,
    "pages": 600,
    "published": true,
    "author": 1
}


PARTIAL UPDATE
--------------
PATCH:
http://127.0.0.1:8000/books/1/

BODY:
{
    "price": 9999
}


DELETE
--------------
DELETE:
http://127.0.0.1:8000/books/1/
"""


# =========================================================
# GENERIC VIEW HIERARCHY
# =========================================================

"""
APIView
↓
GenericAPIView
↓
Mixins
↓
Concrete Generic Views
↓
ViewSets
"""


# =========================================================
# MOST IMPORTANT METHODS
# =========================================================

"""
get_queryset()

get_serializer_class()

get_serializer()

get_object()

perform_create()

perform_update()

perform_destroy()
"""