FROM node:8.15.0-alpine
WORKDIR /usr/src/app

# RUN npm install pm2 -g

COPY . .
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["node", "test.js"] 

# CMD [ "pm2-runtime"]

