from django.contrib import admin
from Information.models import Information_title , Information_data

# Register your models here.
class Information_titleAdmin(admin.ModelAdmin):
    list_display=('id','title','date','author','changedate')

class Information_dataAdmin(admin.ModelAdmin):
    list_display=('id',)

admin.site.register(Information_title,Information_titleAdmin)
admin.site.register(Information_data,Information_dataAdmin)
