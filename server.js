const express = require ('express');

const app = express(); //caling this function ssets up a function
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    console.log('here');
    res.render("index", 
        {user:"Macky!"});
}); //this function will run when someone goes to the root folder

app.get('/users', (req, res)=>{
    res.send('User List');
});
app.get('/users/new', (req, res)=>{
    res.send('New User Form');
});


app.listen(3030); //means port 3030








