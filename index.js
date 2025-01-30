//import express module
const express=require('express')
const app=express()

app.use(express.json())

let users=[
    {id:1,name:"Ram",email:"Ram@gmail.com"},
    {id:2,name:"sita",email:"sita@gmail.com"}

]

//get all users
app.get('/users',(req,res)=>{
    res.join(users)
})
//POST
app.post('/users',(req,res)=>
{
    const newUser={id:users.length+1, ...req.body}
    users.push(newUser)
})

//UPDATE--PUT()
app.put('/users/:id',(req,res)=>{
    //const user=users.find(u=>u.id===parseInt(req.params.id))
    //if(!user) return res.status(404).json({message:"user not found"})
    user.name=req.body.name || req.name
    user.email =req.body.email || req.email
    res.json(user)
})

//DELETE
app.delete('/users/:id',(req,res)=>{
users=users.filter(user=>user.id !==parseInt(req.params.id))
res.json({message:'user Deleted'})
})
app.listen(8000,()=>console.log("server is running in port 8000"))


