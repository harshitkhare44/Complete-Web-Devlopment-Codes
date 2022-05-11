// Inserting data in mongo db 
use harshitkart
// This query will reutrn all the objects with rating equal to 4.5 
 db.items.find({rating:4.5})
 db.items.find({rating:{$gte:3.5}})
 db.items.find({rating:{$gt:3.5}})
 db.items.find({rating:{$gt:3.5},price:{$gt:4000}})


//  And operator 


db.items.find({rating:{$lt:3.5},price:{$gt:4000}})

db.items.find({$or:[{rating:{$lt:3.5}}, {price:{$gt:114000}} ] })


db.items.find({rating:{$gt:3.5}},{rating:1})

db.items.find({rating:{$gt:3.5}},{rating:1 ,qty:1})