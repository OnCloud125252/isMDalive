FROM node:16

COPY . /api
WORKDIR /api

COPY package*.json ./
RUN npm install --production && npm cache clean --force

EXPOSE 3000

CMD node api.js