# Example for Docker using Node js

# Node js instructions
        npm install
        npm run start-dev

# Docker instructions
        docker build -t express-node-app .
        docker image ls
        docker run --name express-node-app-container --volume=${PWD}/src:/app/src:ro -dp 4000:4000 express-node-app
        docker ps --all
        docker logs docker_nodejs_example-node-app-1 -f
        docker exec -it express-node-app-container bash
        docker container remove express-node-app-container -f
        docker image remove express-node-app
        docker image prune --all
        docker logs express-node-app-container --follow
        docker inspect docker_nodejs_example-mongo-1
        docker network ls
        docker network inspect docker_nodejs_example_default
        docker volume ls
        docker volume prune 
        docker exec -it docker_nodejs_example-mongo-1 mongosh -u root -p example
        docker login

# Bash instructions
        ls
        cat index.js 
        touch app.js
        rm app.js
        exit
        printenv
        cd node_modules
        ls -d node* 

# Docker-compose instructions
        docker-compose up -d
        docker-compose down
        docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build --scale node-app=3
        docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml down
        docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build
        docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml push node-app
        docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml pull
# Mongo instructions
        mongo -u root -p example
        show dbs
        use testDB
        db.books.insertOne({ title: "book 1" })
        db.books.find()
