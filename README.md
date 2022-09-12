# Frontend SetUp :

```
git clone https://github.com/haribhutanadhu/Sharing_System_Frontend.git

cd <project-directory>/frontend/

npm install
```
- Run development server on localhost
``` 
npm start
```
# Backend SetUp :

Make sure you have python 3 and pipenv installed on your pc.

Then follow these steps:

```
git clone https://github.com/haribhutanadhu/Sharing_System_Backend.git

cd <project-directory>/backend/

cp .env.example .env
(use 'copy' instead of 'cp' in windows)
```

```
pipenv install --dev
```

- Activate the new virtual environment:

```
pipenv shell
```

- cd into src:

```
cd src/
```

- Make database migrations:

```
python manage.py makemigrations
python manage.py migrate
```

- Create a superuser

```
python manage.py createsuperuser
```

- Run development server on localhost

```
python manage.py runserver
```
