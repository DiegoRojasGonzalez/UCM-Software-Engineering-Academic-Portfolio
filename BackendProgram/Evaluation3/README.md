# Usage

-   Para usar la api recomiendo exportar la coleccion de Thunderclient que eta en el proyecto en el archivo : `thunder-collection_Evaluation3BckendDiegoRojas.json`, luego importar en la app de Thunderbird.

> Para usar el proyecto debes crear un usuario admin en Django para poder obtener tu token.

# Install project

-   up mysql database

```sh
docker-compose up
```

-   create virtual env on python

```sh
python3 -m venv virtualenv
```

-   Activate virtual env

```sh
source virtualenv/bin/activate
```

> NOTE : If activate don't work use : `chmod +x ./virtualenv/bin/activate`

-   install requirements

```sh
pip install -r requirements.txt
```

-   create super admin config

```sh
python3 manage.py createsuperuser
```

```sh

Username : admin
Email address: admin@admin.cl
Password: admin
```

-   database config on `/project/project/settings.py`

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydatabase',
        'USER': 'root',
        'PASSWORD': 'rootpassword',
        'HOST': '172.19.0.2',
        'PORT': '3306',
    }
}
```

-   models config on `/project/Customer/models.py`

```py

class Customer(models.Model):
first_name = models.CharField(max_length=99)
last_name = models.CharField(max_length=99)
email = models.CharField(max_length=20)
phone_number = models.CharField(max_length=20)

class Address(models.Model):
customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)
address_line1 = models.CharField(max_length=199)
address_line2 = models.CharField(max_length=199)
city = models.CharField(max_length=99)
state = models.CharField(max_length=99)
postal_code = models.CharField(max_length=20)
country = models.CharField(max_length=99)
```
