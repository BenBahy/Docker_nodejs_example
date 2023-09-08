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

# Bash instructions
        ls
        cat index.js 
        touch app.js
        rm app.js
        exit

# Docker-compose instructions
        docker-compose up -d
        docker-compose down
