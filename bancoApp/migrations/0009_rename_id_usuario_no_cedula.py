# Generated by Django 4.1.1 on 2022-09-25 20:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bancoApp', '0008_rename_no_cedula_usuario_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='id',
            new_name='no_cedula',
        ),
    ]
