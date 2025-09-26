# Build image of node-api 
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=mongodbadmin
ENV MONGODB_PASSWORD=heak1122

CMD [ "npm","start" ]