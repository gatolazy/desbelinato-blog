#!/bin/bash

#openssl req -x509 -newkey rsa:4096 -keyout fullchain.pem -out privkey.pem -days 365 -nodes


openssl req -x509 -sha256 -nodes -newkey rsa:2048 -days 365 -keyout development.key -out development.crt