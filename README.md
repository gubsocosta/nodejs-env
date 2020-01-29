# Simple Development Enviroment with docker + nodeJS + MongoDB

Before starting the application, copy the ".env.example", localized in the root directory, and paste the new file with name ".env".

### for to start service in backgroud: 
``docker-compose up -d``
### for to stop service:
``docker-compose stop``
### for to remove:
``docker-compose down``

By default, the services are running in these configurations:

| Service  | Port |
|----------|------|
| nginx    |3000  |
| mongodb  |27017 |

The data