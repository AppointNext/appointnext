from rest_framework.decorators import api_view,permission_classes
from models import User, Appointment,AppointmentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.utils import timezone



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