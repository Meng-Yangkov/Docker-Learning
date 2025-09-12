# Spcific the image
FROM node:latest 

#tell Run to install in this directory
WORKDIR /node-app

# Tell docker files should go in Images
COPY . /node-app

#run when you open the code
RUN npm install

#Tell container which port to expose
EXPOSE 80

#excute when container started
CMD ["node", "server.js"];