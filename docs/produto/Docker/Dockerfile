
FROM python:3
FROM python:3.8
ADD . /code

RUN mkdir -p /code

WORKDIR /code

COPY requirements.txt ./
RUN pip install -r requirements.txt

ENV PYTHONUNBUFFERED=1

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

COPY . .

EXPOSE 8000
EXPOSE 27017
