//Quest 3 sub page
const express = 
require ('express');

const router = express.router(); 

router.get('/', (req,res) =>{
    res.send('posts List');
});

router.get('/new', (req,res)=>{
    res.send('Create a nre Post');
});

module.exports = router;

