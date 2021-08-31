FROM python:3
ADD . /code

RUN mkdir -p /code

WORKDIR /code

COPY requirements.txt ./
RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

COPY . .

EXPOSE 8000
