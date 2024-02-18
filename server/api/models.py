from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
    phone = models.IntegerField()
    history = models.CharField(max_length=255, blank=True)

    def addToHistory(self, appointment_id):
        if not self.history:
            self.history = str(appointment_id)
        else:
            self.history += ',' + str(appointment_id)
        self.save()

class appointment(models.Model):
    # withDoctor = models.ForeignKey(user, related_name='doctor_appointments', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user_appointments', on_delete=models.CASCADE)
    # time = models.TimeField(auto_now_add=True)
    # date = models.DateField(auto_now_add=True)

class organisation(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=250)
    contact = models.IntegerField()
    appointments = models.ForeignKey(appointment, on_delete=models.CASCADE)

    def addAppointment(self, appointment_id):
        if not self.appointments.filter(id=appointment_id).exists():
            self.appointments.add(appointment_id)
