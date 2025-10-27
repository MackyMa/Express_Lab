const express = require ('express');

const app = express(); //caling this function ssets up a function

app.get('/', (req, res)=>{
    console.log('here');
    res.send("Heelo World");
}); //this function will run when someone goes to the root folder

app.listen(3030); //means port 3030








