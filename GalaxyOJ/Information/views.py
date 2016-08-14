from django.shortcuts import render
from models import Information_title
from models import Information_data
from django.http import HttpResponseRedirect
from django.core.paginator import Paginator


import datetime
# Create your views here.


def Information(request,Information_id):
    Information_id = int(Information_id)
    try: 
        information_title = Information_title.objects.get(id=Information_id)
        information_data = Information_data.objects.get(id=Information_id)
        context = {'information_title': information_title, 'information_data': information_data}
        return render(request, 'Information/Information_login.html', context)
        #return render(request, 'Information/Information.html',context)
    except:
        return render(request, 'Information/error.html')


def EssayList(request,EssayList_page):

    essayList_page = int(EssayList_page)
    pall = Information_title.objects.all()
    Listsize = pall.count()
    p = Paginator(pall, 8)
    list=p.page(essayList_page).object_list
    context = {"EssayList_page": essayList_page ,'Listsize':Listsize,'list':list}
    return render(request, 'Information/EssayList_manager.html', context)
    #return render(request,'Information/EssayList_unsu.html')
    #return render(request,'Information/EssayList_unsu_unlogin.html')



def edit(request):
    return render(request, 'Information/edit.html')


def store(request):
    title = request.POST['title']
    author = request.POST['author']
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    editor = request.POST['editor']
    p1 = Information_title(title=title, date=time, author=uthor)
    p2 = Information_data(data=editor)
    p1.save()
    p2.save()
    p  = Information_title.objects.get(title=title)
    id = p.id
    return HttpResponseRedirect('/information/' + str(id))
    # return render(request,'Information/edit.html')
