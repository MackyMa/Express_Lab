const express = require ('express');

const userRouter = require('./routes/users');
const postsRouter = require ('./routes/posts');

const app = express(); //caling this function ssets up a function
app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res)=>{
    console.log('here');
    res.render("index", 
        {user:"Macky!"});
}); //this function will run when someone goes to the root folder


app.listen(3030); //means port 3030









