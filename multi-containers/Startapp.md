# Start full-stack application with Custome network

## Mongo Databse
docker run --name mongodb --rm -d --network goals-net mongo

## Start Backend
docker run --name backend-goals --rm -d --network goals-net backend-node

## Start Frontend
docker run --name frontend-goals --rm -d --network goals-net -p 3000:3000 frontend-react