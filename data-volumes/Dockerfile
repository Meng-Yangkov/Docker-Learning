FROM node:20

ARG DEFAULT_PORT = 80

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app
 
ENV PORT $DEFAULT_PORT

EXPOSE $PORT

#data will save in feeback dir
VOLUME [ "/app/feedback" ] 

CMD ["npm", "start"]