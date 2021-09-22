# Generated by Django 3.2.7 on 2021-09-16 06:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Secao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topico', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subtopico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(blank=True, max_length=2)),
                ('comentario', models.TextField(blank=True)),
                ('secao', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Secao.secao')),
            ],
        ),
    ]