const express = require('express');
const moongoose = require('mongoose');
const app = express()
require('dotenv').config({path:'.env'});

const User = require('./models/User');

const port = 5000;
const uri = process.env.MONGODB_URL;




app.get('/',(req, res)=>{
  const newUser = new User();
  newUser.email='dhk9817@gmail.com';
  newUser.name = '김두현';
  newUser.age = 27;
  newUser.save()
  .then((user)=>{
    console.log(user);
    res.json({
      message: 'User Created Successfully'
    });
    })
    .catch((err)=>{
      res.json({
        message : 'User was not Successfully Created'
      });
    }
    );
})


app.listen(port,()=>{
  moongoose.connect(uri)
.then(()=>console.log('connect'))
.catch(()=>console.log('failed'));
});