# Start full-stack application with Custome network

## Mongo Databse
docker run --name mongodb --rm -d --network goals-net mongo

## Start Backend
docker run --name backend-goals --rm -d --network goals-net backend-node

## Start Frontend