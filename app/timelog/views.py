from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import LogSerializer
from .models import Log

# Create your views here.

@api_view(["GET", "POST"])
def logs(request):
    if request.method == "GET":
        logs = Log.objects.all()
        serializer = LogSerializer(logs, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = LogSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "PUT", "DELETE"])
def log(request, pk):
    try:
        log = Log.objects.get(pk=pk)
    except Log.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == "GET":
        serializer = LogSerializer(log)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = LogSerializer(log, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        log.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    

