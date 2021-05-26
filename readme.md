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