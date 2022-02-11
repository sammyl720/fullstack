
## Getting started

Run the following to clone this repo
```bash
git clone https://github.com/sammyl720/fullstack
```

##### Make sure that the config directory includes the following two files

    1. mongo.env
    1. backend.env

##### The mongo.env file should look like:
```
MONGO_INITDB_ROOT_USERNAME=user
MONGO_INITDB_ROOT_PASSWORD=secret
```

##### The backend.env file should look like:

```
PORT=80
MONGO_URI=mongodb://user:secret@mongodb:27017/fullstack-todo?authSource=admin
```

Make sure you have [docker-compose installed](https://docs.docker.com/compose/install/) and run the following:
```bash
docker-compose up
```

Voilà! The [application](http://localhost) should be up and running

![Todo Application screenshot](todo-screenshot.png)