from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from ..models import Doctor, Appointment, Hospital
from rest_framework_simplejwt.tokens import RefreshToken
from ..models import UserLocation
from rest_framework import serializers
from django.contrib.auth.backends import BaseBackend

class VerifyUser(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        user = authenticate(request=request, username=username, password=password)
        return user


# Serializer for Doctor model
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

@api_view(['POST'])
@renderer_classes([JSONRenderer])
def doctorSignUp(request):
    if request.method == 'POST':
        # Extract data from request
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        phone = request.data.get('phone')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        medical_license = request.data.get('medical_license')
        specialization = request.data.get('specialization')
        dob = request.data.get('dob')

        # Validate input data
        if not all([username, password, email]):
            return Response({'message': 'All fields are required'})

        # Check if username or email already exists
        if Doctor.objects.filter(username=username).exists():
            return Response({'message': 'Username already exists'})
        if Doctor.objects.filter(email=email).exists():
            return Response({'message': 'Email already exists'})

        # Create Doctor instance
        doctor = Doctor.objects.create(username=username, email=email, phone=phone, first_name=first_name,
                                       last_name=last_name, medical_license=medical_license, specialization=specialization,
                                       dob=dob)

        # Authenticate the user
        user = authenticate(username=username, password=password)

        if user is not None:
            # Check if Doctor instance was created successfully
            if doctor:
                # Serialize the created Doctor instance
                serializer = DoctorSerializer(doctor)
                return Response({'message': 'User created', 'Doctor': serializer.data, 'success': True})
            else:
                return Response({'message': 'User not created'})
        else:
            return Response({'message': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response({'message': 'Invalid request'})

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        if not all([username, password]):
            return Response({'message': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        doctor = authenticate(request, username=username, password=password)

        if doctor is not None:
            refresh = RefreshToken.for_user(doctor)
            doctor.refreshToken = str(refresh)
            doctor.save()
            return Response({
                'message': 'Login successful',
                'id': doctor.id,
                'email': doctor.email,
                'username': username,
                'refresh_token': str(refresh),
                'access_token': str(refresh.access_token)
            })
        else:
            return Response({'message': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response({'message': 'Invalid request'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def doctorLogout(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        if not all([username, password]):
            return Response({'message': 'All fields are required'})

        doctor = Doctor.objects.get(username=username, password=password)

        if not doctor:
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
def accept_appointment(request):
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

@api_view(['POST'])
def add_hospital(request):
  clinic_name = request.data.get('clinic_name')
  clinic_address = request.data.get('clinic_address')
  clinic_phone = request.data.get('clinic_phone')
  description = request.data.get('description')
  print(request.data)
  if not all([clinic_name, clinic_address, clinic_phone, description]):
    return Response({'message': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)
  else:
    hospital = Hospital.objects.create(clinic_name=clinic_name, clinic_address=clinic_address, clinic_phone=clinic_phone, description=description)
    if hospital:
      return Response({'message': 'Hospital added', 'clinic_name': hospital.clinic_name,
                       "clinic_phone":hospital.clinic_phone}, status=status.HTTP_201_CREATED)
    else:
      return Response({'message': 'Hospital addition failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# features
# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def 