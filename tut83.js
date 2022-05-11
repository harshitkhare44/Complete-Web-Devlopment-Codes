show dbs
use harshitkart
show collections
db.find({price:22200})
Deleting item from MongoDatabase
db.items.deleteOne({price:22200})


deleteOne will delete the matching entry 

db.items.deleteMany({price:129000})