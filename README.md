# Desafio Teravoz

This is a project for [Teravoz Full-Stack Challenge](https://github.com/teravoz/challenge/tree/master/full-stack)

## Configuration
All of the configuration are on `cofig.js` files located in `server` and `client/src` directories

On `server` you may find configurations for server deployment (backend)

On `client/src` you may find configurations for client deployment (frontend)


## Running

- __Frontend__ is available on port `3000`
- __Backend__ is available on port `5000`
- __Mongo__ is available on port `27017`

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
$docker-compose run client
```
### Only Backend (Docker)
To run JUST the backend inside docker, just run
```
$docker-compose run server
```

## Testing
To test the backend just run
```
$docker-compose run server test
```

## Stop
Just type `ctrl+c` or `cmd+c` depending on which OS you are using. If it doesn't fully stop the container, run:
```
$docker-compose stop
```