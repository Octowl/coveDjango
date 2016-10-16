from rest_framework import viewsets

from .models import Item
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    """An API endpoint for listing and creating items"""

    queryset = Item.objects.order_by('name')
    serializer_class = ItemSerializer
