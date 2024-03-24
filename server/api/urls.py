
from django.urls import path,include
from .views import user_view
from .views import appoint_view
from .views import doctor_view
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import test_view


urlpatterns = [
    path('token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup', user_view.register, name='register'),
    path('login', user_view.login, name='login'),
    path('logout', user_view.logout, name='logout'),
    path('doctorSignup', doctor_view.register, name='doctorSignUp'),
    path('doctorLogin', doctor_view.login, name='doctorLogin'),
    path('doctorLogout', doctor_view.doctorLogout, name='doctorLogout'),
    path('bookappointment', appoint_view.book_appointment, name='book_appointment'),
    path('addHospital', doctor_view.add_hospital, name='addHospital'),
    path('getAllHospitals', appoint_view.get_all_hospital, name='getAllHospitals'),
    path('getUpcomingAppointments',appoint_view.show_upcoming_appointments,name="showUpcomingAppointments"),
    path('getAppointmentOfDate',appoint_view.show_dates_appointment,name='date_appoinment'),
    path('getAllAppointments',appoint_view.getAllAppointments,name='getAllAppointments'),
    path('getPastAppointments',appoint_view.get_past_appointments,name='getPastAppointments'),
    path('test',test_view.test)
]