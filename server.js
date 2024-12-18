const express = require('express')
const app = express()
const port=5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>res.end("hello jay"))

/// insert
var arr=[]
app.post('/user',(req,res)=>{
  console.log("post api")
  console.log(req.body)
  arr.push(req.body)
  res.json("inserted")
  
})

app.get('/user',(req,res)=>{
  console.log("get api")
  res.jsonarr
})



app.listen(port,()=>console.log(`exmple app listeing on port http://localhost:${port}`))