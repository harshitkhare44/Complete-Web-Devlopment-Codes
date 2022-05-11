// Inserting data in mongo db 
use harshitkart
db.items.insertOne({name:"Samsung 30s",price:22200,rating:3.5,qty:233,solid:98})

db.items.insertMany([{name:"Samsung 30s",price:22200,rating:4.5,qty:233,solid:98},
{name:"Moto 30s",price:28200,rating:3.5,qty:243,solid:1000},{name:"Realme 80s",price:129000,rating:2.5,qty:633,solid:98 ,isBig:true}])