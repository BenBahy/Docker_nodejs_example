# Example for Docker using Node js

# Node js instructions
        npm install
        npm run start-dev

# Docker instructions
        docker build -t express-node-app .
        docker image ls
        docker run --name express-node-app-container --volume=${PWD}/src:/app/src:ro -dp 4000:4000 express-node-app
        docker ps --all
        docker logs express-node-app-container
        docker exec -it express-node-app-container bash
        docker container remove express-node-app-container -f
        docker image remove express-node-app
        docker image prune --all

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
        docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build
        docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml down
