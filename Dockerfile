FROM node:8

WORKDIR /usr/src/app

ADD package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/