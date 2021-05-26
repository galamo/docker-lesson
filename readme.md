# Download Docker:

https://docs.docker.com/docker-for-windows/install/



# Dockerizing nodejs script
- Create Dockerfile
- Use Some base image from docker hub - nodejs image
- put the following on top of your image `From node:14` - pull the image from docker hub and base my image on the external 
- Run from your command line in the folder `docker build . --tag <image_name>`
- Now we have docker image name - we can run it!
- `docker run <image_name>`
- Container is created 


# Dockerizing Nodejs Api
- Use express
- Copy the relevant files
- Run with Port expose `docker run -p <hostPort:dockerPort> <ImageName>`
- Open browser and check the API  /GET localhost:hostPort
- ssh to docker - get inside!
- `docker exec -it DockerContainerId  bash`

- remove container `docker rm -f container_id`
- remove image `docker rmi -f docker_image`


# Docker-compose
- Ability to run few containers
- Orchestration 
- Declare Services
- run `docker-compose up`
- run `docker-compose down`


##  Hot subjects:

- Docker
- React native
- Angular/React/vue
- Angular IONIC ( hybrid apps )
- Material Design
- Charts.js / Victory Charts
- Databases - Mongodb , mysql, elasticsearch
- Monitoring - influxdb / grafana
- Jenkins
- Amazon AWS Lambda
- Serverless
- Nodejs Microservices
- progressive web apps
- HTTP protocol, layers, UDP
- Authentication - Passport nodejs
- Single sign on
- 
