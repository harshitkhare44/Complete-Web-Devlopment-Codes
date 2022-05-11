// getting-started.js
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/harshitkart');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
  console.log("we are connected bro/sis");
});

// ,{useNewUrlParser:true,useUnifiedTopolgy:true}