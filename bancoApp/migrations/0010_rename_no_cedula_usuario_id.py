# Generated by Django 4.1.1 on 2022-09-25 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bancoApp', '0009_rename_id_usuario_no_cedula'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='no_cedula',
            new_name='id',
        ),
    ]
