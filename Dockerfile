FROM node:16-alpine3.16

WORKDIR /app

COPY package.json /app
RUN npm install --omit=dev
COPY . /app

CMD npm start
