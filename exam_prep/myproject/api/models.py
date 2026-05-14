from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=180)
    authors_email = models.EmailField(db_index = True)
    authors_photo = models.ImageField()

    def __str__(self):
        return self.name
    class Meta:
        ordering = ['author']

class Book(models.Model):
    book_id = models.CharField(max_length=10, primary_key=True, unique=True)
    title = models.CharField(max_length=180, null = True, blank = True, default="Unknown")
    description = models.TextField()
    age = models.IntegerField()
    price = models.FloatField()

    publication_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)

    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title+ " " + self.publication_date
    
    class Meta:
        ordering = ['-title'] # <- descending oreder
        verbose_name = "Book"
        unique_together = ['title', 'author']

#auto_now updates every save
#auto_now_add creates only once

#models.CASCADE => delets the object if object or foregin key is deleted
#models.SET_NULL => ste the value of the atribute to null if object is deleted
#models.PROTECTED => prevents deletion
#models.SET_DEFAULT, default = 1 => set value to 1

# python manage.py shell
# Book.objects.create(title="Harry Potter", price=1200)
# Book.objects.all() <- view objects <QuerySet => [<Book: Harry Potter>]>
# Book.objects.get(id=1)
# Book.objects.filter(price=1200)

"""
book = Book.objects.get(id=1)

book.title = "New Title"

book.save()
"""


# Book.objects.count()
# Book.objects.order_by('title')

"""
Book.objects.filter(price__gt=1000)   # greater than
Book.objects.filter(price__lt=1000)   # less than
Book.objects.filter(price__range=(500, 2000))
"""