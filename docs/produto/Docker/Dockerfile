<<<<<<< Updated upstream
FROM python:3
=======
FROM python:3.8
>>>>>>> Stashed changes
ADD . /code

RUN mkdir -p /code

WORKDIR /code

COPY requirements.txt ./
RUN pip install -r requirements.txt
<<<<<<< Updated upstream
ENV PYTHONUNBUFFERED=1
=======
>>>>>>> Stashed changes

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

COPY . .

EXPOSE 8000
<<<<<<< Updated upstream
=======
EXPOSE 27017
>>>>>>> Stashed changes
