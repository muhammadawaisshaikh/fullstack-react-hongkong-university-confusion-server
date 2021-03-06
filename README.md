# fullstack-react-hongkong-university-confusion-server
build server using express generator

# hierarchy
- Server (confusionServer) - to init the server (REST API)
- DB instance (mongodb) - to store json documents
- NODEJS App (node-mongo) - app that will interact with our server

# express generator
sudo npm install -g express-generator@4.16.0

# morgan (Logger)
npm install morgan --save

# mongoose
npm install mongoose --save
npm install mongoose-currency --save

# cookie-parser
npm install cookie-parser@1.4.3 --save

# express-session
npm install express-session@1.15.6 session-file-store@1.2.0 --save

# Passport - Authentication
npm install passport@0.4.0 passport-local@1.0.0 passport-local-mongoose@5.0.1 --save

# Passport JWT - Authentication
npm install passport-jwt@4.0.0 jsonwebtoken@8.3.0 --save

# CORS
npm install --save cors
npm install cors@2.8.4 --save

# passport facebook authentication
npm install passport-facebook-token@3.3.0 --save

# After passport facebook authentication implementation go on below url to login with facebook:
http://localhost:3000/index.html

# init server
express confusionServer

# hitting Postman
localhost:3000/dishes

# install mondodb
www.mongodb.com
https://www.mongodb.com/try/download/tools

# setup init mongodb - Ubuntu
- Create mongodb folder in project root
$ mongod --dbpath=data --bind_ip 127.0.0.1

# open other terminal - Ubuntu
$ mongo
$ db
$ use DB_NAME
$ db

# mongoDB insert Test command
db.dishes.insert({"name": "Uthapizza", "description": "Test"});

# mongoDB find
db.dishes.find()

# make new NODEJS APP that will interact with mongoDB instance
- create directory named /node-mongo
- init with MongoClient
- init DB operations js file to write CRUD dynamic methods widely used in app
- write CRUD and be on AIR #bamboo

# Postman Collection
https://www.getpostman.com/collections/15b3eeab1bd9f95825c4