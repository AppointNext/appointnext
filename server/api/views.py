from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpRequest,HttpResponse,JsonResponse
from .models import User
# Create your views here.

@api_view(['GET'])
def test(request):
    return Response({'message':'Success'})

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
      return JsonResponse({'message': 'All fields are required',
        'user':user,})
    else:
      return Response({'message': 'Invalid request'})



def login(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})
    
def logout(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})

@api_view(['POST'])    
def doctorSignUp(request):
   if request.method == 'POST':
      username = request.data['username']
      password = request.data['password']
      email = request.data['email']
      phone = request.data['phone']

      if not all([username, password, email]):
        return Response({'message': 'All fields are required'})
      user = User.objects.create(username=username, password=password, email=email,phone=phone)
      if not user:
        return Response({'message': 'User not created'})  
      return Response({'message': 'User created',
                         'username': username,
                         'password': password,
                         'email': email,
                         'success':True})
   else:
      return Response({'message': 'Invalid request'})
   

def doctorLogin(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})

def doctorLogout(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})
    
def bookAppointment(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})
    
def cancelAppointment(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})
    
def viewAppointment(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})

def viewHistory(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})
    
def addAppointment(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})

def removeAppointment(request):
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        if not all([username, password]):
            return Response({'message': 'All fields are required'})
        user = User.objects.get(username=username, password=password)
        if not user:
            return Response({'message': 'User not found'})
        return Response({'message': 'User found',
                         'username': username,
                         'password': password})
    else:
        return Response({'message': 'Invalid request'})
    
