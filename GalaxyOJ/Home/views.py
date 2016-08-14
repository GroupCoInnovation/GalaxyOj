from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.db import models



# Create your views here.


def Main(request):
    try:
        homepage_url = '/user/home/'+str(request.session['id'])
    except:
        homepage_url = ''

    context = {"homepage_url": homepage_url}
    return render(request, 'Home/index.html', context)
    #return render_to_response('Home/index.html', RequestContext(request))

    #return render(request,'Home/index.html')
