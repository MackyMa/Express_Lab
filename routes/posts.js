//Quest 3 sub page
const express = 
require ('express');

const router = express.router(); 

router.get('/', (req,res) =>{
    res.send('posts');
});

router.get('/new', (req,res)=>{
    res.send('New User Post');
});

module.exports = router;

