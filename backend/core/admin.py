from django.contrib import admin
from .models import cropModel, ansModel
# Register your models here.
class cropAdmin(admin.ModelAdmin):
    list_display = ("state", "district", "season")
    
admin.site.register(cropModel, cropAdmin)

class ansAdmin(admin.ModelAdmin):
    list_display = ("crop",)
    
admin.site.register(ansModel, ansAdmin)