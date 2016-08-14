from django.shortcuts import render
from models import User
from django.http import HttpResponseRedirect
from django.core.files.storage import default_storage
from django.conf import settings
from django.core.files.base import ContentFile
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse

import os
import hashlib
import time

# Create your views here.


def login(request):
    return render(request, 'User/login.html')


def login_2(request):
    #return HttpResponse('this is login2')
    name = request.POST['username']
    passwd = request.POST['password']
    temp = User.objects.get(username=name)
    if passwd == temp.password:
        request.session['id'] = temp.id
        request.session['root'] = temp.root
        request.session['username'] = temp.username
        #return render_to_response('Home/index.html', RequestContext(request))
        return HttpResponseRedirect('/')
    else:
        return render(request, 'User/error.html')


def logout(request):
    try:
        del request.session['id']
        del request.session['root']
        del request.session['username']
    except KeyError:
        pass
    #return HttpResponse("You're logged out.")
    #del request.session['username']
    #del request.session['id']
    #del request.session['root']
    #return render_to_response('Home/index.html', RequestContext(request))
    return HttpResponseRedirect('/')


def UserHome(request, User_id):
    user_id = int(User_id)
    try:
        homepage_url = '/user/home/' + str(request.session['id'])
    except:
        homepage_url = ''
    try:
        user = User.objects.get(id=user_id)
        context = {"user": user, "homepage_url": homepage_url}
        return render(request, 'User/personal.html', context)
    except:
        return render(request, 'User/error.html')


def Changeinfo(request,User_id):
    user_id = int(User_id)
    try:
        email = request.POST['email']
        organization = request.POST['organization']
        signature = request.POST['signature']
        p = User.objects.filter(id=user_id).update(email=email, department=organization,description=signature)
        return HttpResponseRedirect('/user/home/'+str(User_id))
    except:
        return render(request, 'User/error.html')


def Changeimg(request, User_id):
    user_id = int(User_id)
    try:
        image = request.FILES.get('images')
        if image.size >1000 and image.size<20480000:
            name = str(image.size)+str(time.time())
            m = hashlib.md5()
            m.update(name)
            name = m.hexdigest()+'.jpg'
            default_storage.save('User/static/User/images/UserhomeImages/'+name,ContentFile(image.read()))
            User.objects.filter(id=user_id).update(imgsrc='/static/User/images/UserhomeImages/'+name)
            return HttpResponseRedirect('/user/home/'+str(User_id))
        else:
            return render(request,'User/error.html')
    except:
        return render(request,'User/error.html')
