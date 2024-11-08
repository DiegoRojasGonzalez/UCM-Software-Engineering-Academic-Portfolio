# Generated by Django 5.0.6 on 2024-06-30 16:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=99)),
                ('last_name', models.CharField(max_length=99)),
                ('email', models.CharField(max_length=20)),
                ('phone_number', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address_line1', models.CharField(max_length=199)),
                ('address_line2', models.CharField(max_length=199)),
                ('city', models.CharField(max_length=99)),
                ('state', models.CharField(max_length=99)),
                ('postal_code', models.CharField(max_length=20)),
                ('country', models.CharField(max_length=99)),
                ('customer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Customer.customer')),
            ],
        ),
    ]
