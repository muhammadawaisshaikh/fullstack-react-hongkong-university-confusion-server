# fullstack-react-hongkong-university-confusion-server
build server using express generator

# express generator
sudo npm install -g express-generator@4.16.0

# init server
express confusionServer

# hitting Postman
localhost:3000/dishes

# install mondodb
www.mongodb.com

# setup init
- Create mongodb folder in project root
$ mongod --dbpath=data --bind_ip 127.0.0.1

# open other terminal
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