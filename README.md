# setup on windows

# in base dir:  
$ python -m venv venv  
$ .\venv\Scripts\activate  
$ pip install django djangorestframework django-cors-headers  
$ cd .\app\  
$ python .\manage.py migrate  
$ python .\manage.py runserver  

# in different terminal
$ cd .\app\frontend\  
$ yarn  
$ yarn start  