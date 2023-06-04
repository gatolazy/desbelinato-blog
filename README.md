# Desbelinato Blog

## Start Stack in development
1. Build and run docker compose stack:
````shell
    make init-dev
````

2. run frontend in development mode
````shell
    make frontend-dev
````


## Backend Authentication system
Application use laravel/sanctum, spa-authentication ([more](https://laravel.com/docs/10.x/sanctum#spa-configuration)).

Sanctum get stateful list of domains from *SANCTUM_STATEFUL_DOMAINS* variable it
passed to backend container via docker-compose; *SANCTUM_STATEFUL_DOMAINS* contains
host machine ip exported by *start.sh* script.


## Docker compose
List of configuration example
* [How to setup Nginx to run PHP/Laravel API with frontend app on same domain](https://ivanostojic.medium.com/how-to-setup-nginx-to-run-php-laravel-api-with-frontend-app-on-same-domain-91a98a17dd65)
* [Using Docker to Containerize Laravel Apps for Development and Production](https://www.honeybadger.io/blog/laravel-docker-php/)
* [How To Set Up Laravel, Nginx, and MySQL with Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-set-up-laravel-nginx-and-mysql-with-docker-compose)
* [How To Install and Set Up Laravel with Docker Compose on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04)