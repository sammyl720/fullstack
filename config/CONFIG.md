### Make sure that this directory includes the following two files

. mongo.env
. backend.env

##### The mongo.env file should look like
```
MONGO_INITDB_ROOT_USERNAME=user
MONGO_INITDB_ROOT_PASSWORD=secret
```

##### The backend.env file should look like:

```
PORT=80
MONGO_URI=mongodb://user:secret@mongodb:27017/fullstack-todo?authSource=admin
```
