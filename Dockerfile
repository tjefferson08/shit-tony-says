FROM node:boron
EXPOSE 8080

WORKDIR /usr/src
COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . /usr/src

