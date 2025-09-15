FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app
 
EXPOSE 80

#data will save in feeback dir
VOLUME [ "/app/feedback" ] 

CMD ["node", "server.js"]