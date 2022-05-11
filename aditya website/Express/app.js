const express=require("express");
const fs = require("fs");
const path=require("path");
const app=express();
const port=80;
// EXPRESS SPECIFIC STUFF 

// app.get("/",(req,res)=>{
//     res.send("This is home page of my first express app with harry");
// });




app.use('/static',express.static('static')); // Serving static files 
app.use(express.urlencoded());

// PUG SPECIFIC STUFF 


app.set('view engine','pug');// Set the template engine as pug 

app.set('views', path.join(__dirname,'views')); // set the views directory
// Our pug demo endpoint
// app.get('/demo', (req, res)=> {
//     res.status(200).render('demo', { title: 'Hey Harshit', message: 'Hello there and thanks for telling me how to use pug' })
//   })
// app.get("/",(req,res)=>{
//     res.status(200).send("This is home page of my first express app with harry");
// });
// app.get("/about",(req,res)=>{
//     res.send("This is about page of my first express app with harry");
// });
// app.post("/about",(req,res)=>{
//     res.send("This is about page of my first express app with harry");
// });
// app.post("/this",(req,res)=>{
//     res.status(400).send("This page is not found");
// });

// ENDPOINTS 
app.get('/',(req,res)=>{
    const con="This is the best content on the internet";
    const params={'title':'Pubg is the best game',"content":con};
    res.status(200).render('index.pug',params);
});
app.post('/',(req,res)=>{
// console.log(req.body);
name=req.body.name;
email=req.body.email;
subject=req.body.subject;
describe=req.body.describe;

let outputToWrite=`the name of the client : ${name}, his/her email address : ${email},  Subject:    ${subject}, Description:  ${describe}`;
   fs.writeFileSync('output.txt',outputToWrite); 
const params={'message':'Your form has been submitted sucessfully'};
    res.status(200).render('index.pug',params);
});

// START THE SERVER 

app.listen(port,()=>{
    console.log(`The application started sucessfully on port ${port}`);
});