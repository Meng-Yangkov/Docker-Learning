# Start full-stack application with Custome network

## Mongo Databse
docker run --name mongodb --rm -d --network goals-net m -v data:/data/db mongo

## Start Backend
docker run --name backend-goals --rm -d --network goals-net backend-node

## Start Frontend
docker run --name frontend-goals --rm -d --network goals-net -p 3000:3000 frontend-react


# Start with data persistance

## Mongo Database
Start with data persistance and security 
docker run --name mongodb --rm -d --network goals-net -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=heak1122 -v data:/data/db mongo


## Start Backend api
t
## with interactive
docker run --name backend-goals --rm -it -p 80:80 --network goals-net -v D:\Linux\Docker\ReanDocker\multi-containers\backend:/app -v backend-logs:/app/logs backend-node sh -c "npm install && npm start"