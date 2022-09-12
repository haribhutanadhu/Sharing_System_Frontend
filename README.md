Procedure:

Setup Frontend :

```
git clone https://github.com/Hemanth-Gattu/Production_House_Management.git

cd <project-directory>/frontend/

npm install

npm start

```
Setup Backend:

Make sure you have python 3 and pipenv installed on your pc.

Then follow these steps:

```
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
