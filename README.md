# Desafio Teravoz

##Configuration
All of the configuration are on `cofig.js` files located in `server` and `client/src` directories

On `server` you may find configurations for server deployment (backend)

On `client/src` you may find configurations for client deployment (frontend)


## Running
#### Frontend and Backend (Docker)
To run front and back together just run:
```
$cd teravoz
```
And then:
```
$docker-compose up
```
### Only Frontend (Docker)
To run JUST the frontend inside docker, just run
```
$cd teravoz/client
```
And then:
```
$docker-compose up
```
### Only Backend (Docker)
To run JUST the backend inside docker, just run
```
$cd teravoz/server
```
And then:
```
$docker-compose up
```

## Stop
Just type `ctrl+c` or `cmd+c` depending on which OS you are using. If it doesn't fully stop the container, run:
```
$docker-compose stop
```