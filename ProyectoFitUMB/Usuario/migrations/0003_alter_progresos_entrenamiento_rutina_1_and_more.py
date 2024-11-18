# Generated by Django 5.1.3 on 2024-11-18 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0002_usuarios_receta_almuerzo_usuarios_receta_cena_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='progresos_entrenamiento',
            name='rutina_1',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_entrenamiento',
            name='rutina_2',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_entrenamiento',
            name='rutina_3',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_entrenamiento',
            name='semana_completada',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_nutricion',
            name='dia_completado',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_nutricion',
            name='status_almuerzo',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_nutricion',
            name='status_cena',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='progresos_nutricion',
            name='status_desayuno',
            field=models.BooleanField(default=False),
        ),
    ]
