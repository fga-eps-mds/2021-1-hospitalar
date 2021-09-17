from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt # Para outros domínios acessarem os dados Postman
from rest_framework.parsers import JSONParser # Para analisar a entrada do modelo
from django.http.response import JsonResponse # Passar a entrada de dados para o banco

from django.http import HttpResponse

from hospital.models import Item,Checklist,Avaliacao # Importa os modelos criados no models.py
from hospital.serializers import ItemSerializer,ChecklistSerializer,AvaliacaoSerializer 

from rest_framework import generics

# Create your views here.

def main(request):
    return HttpResponse('a.html')





@csrf_exempt
def itemApi(request, id=0): 
    if request.method=='GET': # Converter o modelo para o formato Json
        item = Item.objects.all()
        item_serializer=ItemSerializer(item,many=True)
        return JsonResponse(item_serializer.data,safe=False) 
    elif request.method=='POST':
        item_data=JSONParser().parser(request)
        item_serializer=ItemSerializer(data=item_data)
        if item_serializer.is_valid():
            item_serializer.save()
            return JsonResponse("Adicionado com Sucesso", safe=False)
        return JsonResponse("Falha ao adicionar", safe=False)
    elif request.method=='PUT':
        item_data=JSONParser().parser(request)
        item=Item.objects.get(ItemId=item_data['ItemId'])
        item_serializer=ItemSerializer(item,data=item_data)
        if item_serializer.is_valid():
            item_serializer.save()
            return JsonResponse("Atualizado com Sucesso", safe=False)
        return JsonResponse("Falha ao atualizar")
    elif request.method=='DELETE':
        item=Item.objects.get(ItemId=id)
        item.delete()
        return JsonResponse("Deletado com Sucesso", safe=False)


