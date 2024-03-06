from rest_framework.decorators import api_view,permission_classes
from models import User, Appointment
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated



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