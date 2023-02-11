from django.contrib import admin
from .models import cropModel
# Register your models here.
class cropAdmin(admin.ModelAdmin):
    list_display = ("state", "district", "season")
    
admin.site.register(cropModel, cropAdmin)