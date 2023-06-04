FROM php:8.2-fpm

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apt update -y && apt upgrade -y
RUN apt install zip unzip
#RUN docker-php-ext-install openssl bcmath curl json mbstring pdo_mysql tokenizer xml zip
#RUN docker-php-ext-enable openssl bcmath curl json mbstring pdo_mysql tokenizer xml zip

RUN docker-php-ext-install pdo pdo_mysql


# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
COPY . /var/www

# Copy existing application directory permissions
COPY --chown=www:www . /var/www/app
# Change current user to www
USER www

WORKDIR /var/www/app
#RUN php artisan key:generate

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]