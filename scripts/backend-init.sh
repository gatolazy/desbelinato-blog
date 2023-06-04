#! /bin/bash

docker exec desbelinato-blog_backend_1 composer install
docker exec desbelinato-blog_backend_1 composer run init-app