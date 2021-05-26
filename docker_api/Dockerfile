From node:14

WORKDIR /usr/src/node-api
COPY index.js /usr/src/node-api/index.js
COPY package*.json /usr/src/node-api

RUN npm install

EXPOSE 3500
CMD [ "npm" , "start"]