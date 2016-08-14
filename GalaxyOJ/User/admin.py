from django.contrib import admin

from User.models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display=('id','username','email','department','contribution','root')

admin.site.register(User,UserAdmin)
