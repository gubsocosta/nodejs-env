# Simple JS Development Enviroment with docker + nodeJS + MongoDB + mongo-express

nodeJS: is a JS interpreter

MongoDB: is a general-purpose, document-oriented, high-perfomance database

mongo-express: is a Web-based MongoDB admin interface, written with Node.js and express

## Getting Started

Before starting the application, copy the ".env.example", localized in the root directory, and paste the new file with name ".env".

### for to start service in backgroud: 
``docker-compose up -d``
### for to stop service:
``docker-compose stop``
### for to remove:
``docker-compose down``

By default, the services are running in these configurations:

| Service        | Port |
|----------------|------|
| nodeJS         |3000  |
| mongodb        |27017 |
| mongo-express  |8081  |