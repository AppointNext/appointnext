from rest_framework.decorators import api_view,permission_classes
from ..models import Appointment,User,Doctor
# from models import Appointment,AppointmentSerializer
from ..models import AppointmentSerializer,Appointment,Hospital,HospitalSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone
from math import radians, sin, cos, sqrt, asin


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
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def show_upcoming_appointments(request):
    user_id = request.data.get('id')
    current_time = timezone.now()
    upcoming_appointments = Appointment.objects.filter(user=user_id, date_time__gte=current_time, status='BOOKED').order_by('date_time')
    if upcoming_appointments.exists():
        serialized_appointments = AppointmentSerializer(upcoming_appointments, many=True).data
        return Response({'message': 'Upcoming appointments found', 'appointments': serialized_appointments}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'No upcoming appointments found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_detailed_appointment(request):
    appointment_id = request.data.get('appointment_id')
    appointment = Appointment.objects.filter(id=appointment_id).first()
    if appointment:
        serialized_appointment = AppointmentSerializer(appointment).data
        return Response({'message': 'Appointment found', 'appointment': serialized_appointment}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'No appointment found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_todays_appointment(request):
    user_id = request.data.get('id')
    current_time = timezone.now()
    todays_appointments = Appointment.objects.filter(user=user_id, date_time__date=current_time.date(), status='BOOKED').order_by('date_time')
    if todays_appointments.exists():
        serialized_appointments = AppointmentSerializer(todays_appointments, many=True).data
        return Response({'message': 'Todays appointments found', 'appointments': serialized_appointments}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'No todays appointments found'}, status=status.HTTP_404_NOT_FOUND)
    
# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def book_appointment(request):
#     user_id = request.data.get('id')
#     doctor_id = request.data.get('doctor_id')
#     description = request.data.get('description')
#     option = request.data.get('option')
#     date_time = request.data.get('date_time')
#     if not all([user_id, doctor_id, date_time]):
#         return Response({'message': 'User id, doctor id, date and time are required'}, status=status.HTTP_400_BAD_REQUEST)
#     else:
#         appointment = Appointment.objects.create(user=user_id, doctor=doctor_id, description=description, option=option, date_time=date_time)
#         if appointment:
#             return Response({'message': 'Appointment booked', 'appointment_id': appointment.id}, status=status.HTTP_201_CREATED)
#         else:
#             return Response({'message': 'Appointment booking failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  

@api_view(['GET'])
def get_all_hospital(request):
    hospitals = Hospital.objects.all()
    if hospitals:
        serialized_hospitals = HospitalSerializer(hospitals, many=True).data
        return Response({'message': 'Hospitals found', 'hospitals': serialized_hospitals}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'No hospitals found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_appointment(request):
    user_id = request.data.get('id')
    doctor_id = request.data.get('doctor_id')
    description = request.data.get('description')
    date_time = request.data.get('date_time')
    user = User.objects.get(id=user_id)
    doctor = Doctor.objects.get(id=doctor_id)
    if not all([user_id, doctor_id, date_time]):
        return Response({'message': 'User id, doctor id, date and time are required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        appointment = Appointment.objects.create(user=user, doctor=doctor, description=description, status='PENDING', date_time=date_time)
        if appointment:
            return Response({'message': 'Appointment booked', 'appointment_id': appointment.id}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'Appointment booking failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


# implement the core feature get nearest hospitals 
        


def haversine(lat1, lon1, lat2, lon2):
    # Radius of the Earth in kilometers
    R = 6371.0

    # Convert latitude and longitude from degrees to radians
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    # Calculate the differences in latitude and longitude
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    # Calculate the distance using the Haversine formula
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * asin(sqrt(a))
    distance = R * c

    return distance


