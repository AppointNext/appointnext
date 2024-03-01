
from django.urls import path,include
from .views import register,login,logout,doctorLogin,doctorLogout,doctorSignUp,addAppointment,test
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', register, name='register'),
    path('login', login, name='login'),
    path('logout', logout, name='logout'),
    # path('appointments/', appointments, name='appointments'),
    # path('history/', history, name='history'),
    # path('organisation/', organisation, name='organisation'),
    path('addAppointment', addAppointment, name='addAppointment'),
    # path('deleteAppointment/', deleteAppointment, name='deleteAppointment'),
    # path('updateAppointment/', updateAppointment, name='updateAppointment'),
    # path('getAppointment/', getAppointment, name='getAppointment'),
    # path('getOrganisation/', getOrganisation, name='getOrganisation'),
    # path('getHistory/', getHistory, name='getHistory'),
    path('doctorSignUp', doctorSignUp, name='doctorSignUp'),
    path('doctorLogin', doctorLogin, name='doctorLogin'),
    path('doctorLogout', doctorLogout, name='doctorLogout'),
    path('test',test)
    # path('doctorAppointments/', doctorAppointments, name='doctorAppointments'),
]