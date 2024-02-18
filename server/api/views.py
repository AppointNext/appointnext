from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpRequest,HttpResponse
from .models import User
# Create your views here.

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
      username = request.data['username']
      password = request.data['password']
      email = request.data['email']
      phone = request.data['phone']
      
      if not all([username, password, email]):
        return Response({'message': 'All fields are required'})
      
      print(username, password, email)
      user = User.objects.create(username=username, password=password, email=email,phone=phone)
      user.save()
      if not user:
        return Response({'message': 'User not created'})
      all_users = User.objects.all()
      print(all_users[0].username, all_users[0].password, all_users[0].email, all_users[0].phone)
      return Response({'message': 'All fields are required',
                         'username': username,
                         'password': password,
                         'email': email})
    else:
      return Response({'message': 'Invalid request'})
