from django.views.generic import View
from django.http import JsonResponse

from .models import Item


class ItemsView(View):
    """An API endpoint for items"""

    def get(self, request):
        queryset = Item.objects.all()
        data = [
            {
                'name': item.name,
                'price': item.price,
                'description': item.description,
                'image': item.image.url
            }
            for item in queryset
        ]

        return JsonResponse(data, safe=False)