#! /bin/bash

docker exec desbelinato-blog_frontend_1 npm install
docker exec -it desbelinato-blog_frontend_1 npm run start