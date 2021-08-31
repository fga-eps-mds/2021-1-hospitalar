FROM node:latest

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
RUN npm install react-scripts -g

ADD . /app

EXPOSE 3000
CMD ["npm", "start"]