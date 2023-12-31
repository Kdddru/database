const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//body를 확인할수있게 해주는 것 
app.use(bodyParser.json());

const port = 5000;

const users= [
  {
    id: '1',
    name:'김두현',
    email:'dhk9817@gmail.com',
  },
  {
    id:'2',
    name:'메에롱',
    email:'djiw23@gmail.com',
  },
  {
    id:'3',
    name:'바아보',
    email:'ddkk2001@gmail.com',
  },
  {
    id:'4',
    name:'눈눈누',
    email:'d32131@gmail.com',
  },
]



app.get('/api/user',(req,res)=>{
  res.json(users);
})

app.get('/api/user/:id',(req,res)=>{
  const {id} = req.params
  const user = users.find((u)=>(
    u.id === id
  ))
  console.log(user);
  if(user){
    res.json(user);
  }
  else{
    res.status(404).json({error : 'undefined !'});
  }
});


app.listen(port, ()=>{
  console.log('서버 실행')
})