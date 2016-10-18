from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^items/', views.ItemsView.as_view()),
    url(r'^auth/signup/', views.SignupView.as_view()),
]