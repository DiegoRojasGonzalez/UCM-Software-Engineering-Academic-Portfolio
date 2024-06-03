# Run project 

### 0 Run mongo

```
docker compose up 
```

### 1 Create virtual env 
```
python3 -m venv env
```

### 2 Active virtual env

- Windows 
```
.\env\Scripts\activate
```

- Debian/Mac
```
source env/bin/activate
```

> Si pide permisos ejecuta `chmod +x env/bin/activate`


### 3 Install dependencies

```
pip install -r requirements.txt
```

### 4 Run 
```
python manage.py runserver
```

### Create admin 

```
python manage.py createsuperuser
```

# Django admin

username : admin
password : admin 
mail : admin@admin.cl


# URLS 

- Panel admin Django
```
/admin/
```

- Index app 'app'
```
/app/home/
```
