from django.views.generic import View
from django.http import JsonResponse, HttpResponse, HttpResponseServerError
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import json

from .models import Item


class ItemsView(View):
    """An API endpoint for items"""

    def get(self, request):
        queryset = Item.objects.all()
        data = [
            {
                'id': item.id,
                'name': item.name,
                'price': item.price,
                'description': item.description,
                'image': item.image.url
            }
            for item in queryset
        ]

        return JsonResponse(data, safe=False)


class SignupView(View):

    def post(self, request):
        data = json.loads(request.body)

        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        password = data['password']

        user = User.objects.create_user(email, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.save()

        print(user)

        user = authenticate(username=email, password=password)
        if user is not None:
            return HttpResponse("it worked")
        else:
            return HttpResponseServerError()
