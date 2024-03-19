from django.contrib.auth.models import AbstractUser
from django.db import models
from rest_framework import serializers
import datetime

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    history = models.TextField(blank=True)
    refreshToken = models.CharField(max_length=255, blank=True)

    # Specify custom related names for the groups and user_permissions fields
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True,
        verbose_name='groups',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',
        blank=True,
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
    )

    def addToHistory(self, appointment_id):
        if not self.history:
            self.history = str(appointment_id)
        else:
            self.history += ',' + str(appointment_id)
        self.save()


class UserLocation(models.Model):
    user = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.latitude}, {self.longitude} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
    

class Doctor(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField(default=datetime.date.today)

    gender = models.CharField(max_length=10,default="male")
    phone = models.CharField(max_length=15)
    history = models.TextField(blank=True)
    refreshToken = models.CharField(max_length=255, blank=True)
    medical_license = models.CharField(max_length=100,default="")
    specialization = models.CharField(max_length=100,default="")
    clinic = models.ForeignKey('Hospital', on_delete=models.CASCADE, null=True)  # Allow null values
    
    years_of_experience = models.PositiveIntegerField(default=0)
    medical_qualifications = models.TextField(default="")
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)

    # Specify custom related names for the groups and user_permissions fields
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_doctor_set',
        blank=True,
        verbose_name='groups',
        help_text='The groups this doctor belongs to. A doctor will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_doctor_set',
        blank=True,
        verbose_name='doctor permissions',
        help_text='Specific permissions for this doctor.',
    )

    def addToHistory(self, appointment_id):
        if not self.history:
            self.history = str(appointment_id)
        else:
            self.history += ',' + str(appointment_id)
        self.save()

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

        
class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date_time = models.DateTimeField()
    description = models.TextField(max_length=1000, blank=True, null=True)
    status_choices = [
        ('BOOKED', 'Booked'),
        ('CANCELLED', 'Cancelled'),
        ('COMPLETED', 'Completed'),
        ('PENDING', 'Pending')
    ]
    treatment_for = models.TextField(max_length=1000, blank=True, null=True)
    previously_visited = models.BooleanField(default=False)
    any_report = models.ImageField(upload_to='reports/', blank=True, null=True)
    status = models.CharField(max_length=10, choices=status_choices,default='PENDING')

    def __str__(self):
        return f"{self.user.username} - {self.doctor.username} - {self.date_time.strftime('%Y-%m-%d %H:%M')}"
    

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'


class Hospital(models.Model):
    clinic_name = models.CharField(max_length=100)
    clinic_address = models.TextField()
    clinic_phone = models.CharField(max_length=15)
    description = models.TextField()

    def __str__(self):
        return self.clinic_name

class Hospital_Location(models.Model):
    hospital = models.ForeignKey(Hospital, on_delete=models.CASCADE)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    created_at = models.DateTimeField(auto_now_add=True)


class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = '__all__'