FROM python:3

WORKDIR /usr/src/main

RUN go build main.py

COPY . .

EXPOSE 8000

ENTRYPOINT [ "/main" ]
