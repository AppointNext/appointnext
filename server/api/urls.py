
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
    path('doctorSignUp', user_view.doctorSignUp, name='doctorSignUp'),
    path('doctorLogin', user_view.doctorLogin, name='doctorLogin'),
    path('doctorLogout', user_view.doctorLogout, name='doctorLogout'),
    path('bookappointment', appoint_view.book_appointment, name='book_appointment'),
    path('addHospital', doctor_view.add_hospital, name='addHospital'),
    path('getAllHospitals', appoint_view.get_all_hospital, name='getAllHospitals'),
    # # path('appointments/', appointments, name='appointments'),
    # # path('history/', history, name='history'),
    # # path('organisation/', organisation, name='organisation'),
    # path('addAppointment', addAppointment, name='addAppointment'),
    # # path('deleteAppointment/', deleteAppointment, name='deleteAppointment'),
    # # path('updateAppointment/', updateAppointment, name='updateAppointment'),
    # # path('getAppointment/', getAppointment, name='getAppointment'),
    # # path('getOrganisation/', getOrganisation, name='getOrganisation'),
    # # path('getHistory/', getHistory, name='getHistory'),
    # path('doctorSignUp', doctorSignUp, name='doctorSignUp'),
    # path('doctorLogin', doctorLogin, name='doctorLogin'),
    # path('doctorLogout', doctorLogout, name='doctorLogout'),
    path('test',test_view.test)
    # # path('doctorAppointments/', doctorAppointments, name='doctorAppointments'),
]