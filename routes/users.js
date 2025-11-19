//This is considered a sub page
const express = require ('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.render(`users/list`,{users:users});
});

router.get('/new',(req,res)=>{
    res.render('users/new', {firstName: ""});
});

router.post('/',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const gender = req.body.gender;

    const isValid = firstName !=="" && lastName!==""; //check if they are there,added
    if(isValid)
    {
        console.log(`Adding User: ${firstName}`);
        users.push({
            name:firstName,
            lastName:lastName,
            gender:gender,
            age:age,
        });
        console.log(`New Set of Users: ${users}`);
        res.send("User Created!");
    }
    else{
        console.log("Error adding user!");
        res.render("Users/new", {firstName: firstName});
    }
});

// router.get(':/id',(req,res)=>{
//     res.send(`Getting User data: ${req.params.id}`);
// });

router.route("/:id").get((req,res)=>{
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting user with id: ${req.params.id}`);
}).put((req,res)=>{
    res.send(`Updating user with id: ${req.params.id}`);
});


const users = [
    {
        firstName:"Macky",
        lastName:"Malik",
        age:"22",
        gender:"Female",
    }
];

router.param("id", (req, res,next, id)=>{
    console.log(`Accessing user #${id}`);
    next();
});

module.exports = router; 