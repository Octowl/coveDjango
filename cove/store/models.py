from django.db import models
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Item(models.Model):
    """A user listed item in the store"""

    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=3)
    description = models.TextField(blank=True, default='')
    image = models.ImageField(upload_to='images', blank=True, default='')

    def __str__(self):
        return self.name
