from rest_framework.decorators import api_view,permission_classes
from models import User, Appointment
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status



# Authentication
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
   
@api_view(['POST'])
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
    
@api_view(['POST'])
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

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def show_dates_appointment(request):
  date = request.data.get('date')
  user_id = request.data.get('id')
  if not date:
    return Response({'message': 'Date is required'}, status=status.HTTP_400_BAD_REQUEST)
  else:
    appointments = Appointment.objects.filter(date=date,id=user_id)
    if appointments:
      return Response({'message': 'Appointments found', 'appointments': appointments}, status=status.HTTP_200_OK)
    else:
      return Response({'message': 'No appointments found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_appointment(request):
  date = request.data.get('date')
  user_id = request.data.get('id')
  if not date:
    return Response({'message': 'Date is required'}, status=status.HTTP_400_BAD_REQUEST)
  else:
    appointment = Appointment.objects.create(date=date,id=user_id)
    if appointment:
      return Response({'message': 'Appointment booked', 'appointment': appointment}, status=status.HTTP_201_CREATED)
    else:
      return Response({'message': 'Appointment booking failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def cancel_appointment(request):
  date = request.data.get('date')
  user_id = request.data.get('id')
  if not date:
    return Response({'message': 'Date is required'}, status=status.HTTP_400_BAD_REQUEST)
  else:
    appointment = Appointment.objects.filter(date=date,id=user_id)
    if appointment:
      appointment.delete()
      return Response({'message': 'Appointment cancelled'}, status=status.HTTP_200_OK)
    else:
      return Response({'message': 'No appointments found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def show_appointments(request):
  user_id = request.data.get('id')
  appointments = Appointment.objects.filter(id=user_id)
  if appointments:
    return Response({'message': 'Appointments found', 'appointments': appointments}, status=status.HTTP_200_OK)
  else:
    return Response({'message': 'No appointments found'}, status=status.HTTP_404_NOT_FOUND)
  
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def show_all_appointments(request):
  appointments = Appointment.objects.all()
  if appointments:
    return Response({'message': 'Appointments found', 'appointments': appointments}, status=status.HTTP_200_OK)
  else:
    return Response({'message': 'No appointments found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def show_appointments_by_date(request):
  date = request.data.get('date')
  appointments = Appointment.objects.filter(date=date)
  if appointments:
    return Response({'message': 'Appointments found', 'appointments': appointments}, status=status.HTTP_200_OK)
  else:
    return Response({'message': 'No appointments found'}, status=status.HTTP_404_NOT_FOUND)


# features
@api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def 