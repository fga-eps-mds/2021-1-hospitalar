FROM python:3

COPY . /app
COPY requirements.txt ./

RUN pip install -r requirements.txt

WORKDIR /app

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

COPY . .

EXPOSE 8000
