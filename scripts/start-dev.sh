#! /bin/bash

# get host IP to share application via local network
export EXTERNAL_IP=$(hostname -I | awk '{print $1}')

docker-compose -p "desbelinato-blog" -f ./docker/docker-compose.yml -f ./docker/docker-compose.development.yml up -d