
# # url http://localhost:8000/api/doctorSignUp
# @api_view(['POST'])
# def doctorSignUp(request):
#    if request.method == 'POST':
#       username = request.data['username']
#       password = request.data['password']
#       email = request.data['email']
#       phone = request.data['phone']

#       if not all([username, password, email]):
#         return Response({'message': 'All fields are required'})
#       user = User.objects.create(username=username, password=password, email=email,phone=phone)
#       if not user:
#         return Response({'message': 'User not created'})
#       return Response({'message': 'User created',
#                          'username': username,
#                          'password': password,
#                          'email': email,
#                          'success':True})
#    else:
#       return Response({'message': 'Invalid request'})


# # url http://localhost:8000/api/doctorLogin
# def doctorLogin(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})

# # url http://localhost:8000/api/doctorLogout
# def doctorLogout(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})

# # url http://localhost:8000/api/bookAppointment
# def bookAppointment(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})

# # url http://localhost:8000/api/cancelAppointment
# def cancelAppointment(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})

# # url http://localhost:8000/api/viewAppointment
# def viewAppointment(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})


# # url http://localhost:8000/api/viewHistory
# def viewHistory(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})

# # url http://localhost:8000/api/addAppointment
# def addAppointment(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})


# # url http://localhost:8000/api/removeAppointment
# def removeAppointment(request):
#     if request.method == 'POST':
#         username = request.data['username']
#         password = request.data['password']
#         if not all([username, password]):
#             return Response({'message': 'All fields are required'})
#         user = User.objects.get(username=username, password=password)
#         if not user:
#             return Response({'message': 'User not found'})
#         return Response({'message': 'User found',
#                          'username': username,
#                          'password': password})
#     else:
#         return Response({'message': 'Invalid request'})
