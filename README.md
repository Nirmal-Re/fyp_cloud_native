# Introduction

This repository contains code for my microservices backend, developed for my Final Year Project. It is entirely written in NodeJs with typescript.

# Instructions To Run The Backend In Development:

In order to run the backend, following commands need to be sequentially ran in the CLI (Command Line Interface). Note that docker needs to be in the system from the following to run

1. On the root folder, run `docker-compose up`. This will create an image, using the Dockerfile present inside the folder for each microservice, and run each of the of those image in a seperate container, under the same network.

All the services can be accessed through localhost (http://localhost:80).


# Instruction To Run The Backend In Production:

In order to run the backend, following commands need to be sequentially ran in the CLI (Command Line Interface). Note that this requires -- a kubernetes services on the cloud, a container registry, and an appropriate Ingress controller.

1. `docker compose build`
2. Push you images to a container registry using the command, `docker push your_image_name`.
3. Then, apply all the k8-config files using the command, `kubectl apply -f config_file.yaml`. The file also contains config map where it is necessary that you provide your own values.


