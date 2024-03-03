from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpRequest,HttpResponse,JsonResponse
from .models import User
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model



# url http://localhost:8000/api/test
@api_view(['GET'])
def test(request):
    refreshToken,accessToken = generate_Token(User.objects.get(username='tester2212'))
    print('refreshToken: ',refreshToken,'\naccessToken: ',accessToken)
    return Response({'message':'Success',
                     'server':'running',
                     'test':'passed'})

def generate_Token(user):
    refresh = RefreshToken.for_user(user)
    access_token_expires_at = refresh.access_token.lifetime
    refresh_token_expires_at = refresh.lifetime 

    return str(refresh.access_token), str(refresh)


# url http://localhost:8000/api/register
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
      print(user)
      if not user:
        return Response({'message': 'User not created'})
      all_users = User.objects.all()
      print(all_users[0].username, all_users[0].password, all_users[0].email, all_users[0].phone)
      return Response({'message': 'The registration is successful',
                         'username': username,
                         'password': password,
                         'email': email,
                         'success':True})
    else:
      return Response({'message': 'Invalid request'})


# url http://localhost:8000/api/login
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

# url http://localhost:8000/api/doctorSignUp
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


# url http://localhost:8000/api/doctorLogin
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

# url http://localhost:8000/api/doctorLogout
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

# url http://localhost:8000/api/bookAppointment
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

# url http://localhost:8000/api/cancelAppointment
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

# url http://localhost:8000/api/viewAppointment
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


# url http://localhost:8000/api/viewHistory
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

# url http://localhost:8000/api/addAppointment
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


# url http://localhost:8000/api/removeAppointment
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
