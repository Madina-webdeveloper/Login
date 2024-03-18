
const express=require("express")
const app=express()
const mysql=require("mysql")
const cors=require("cors")


app.use(express.json())
app.use(cors())

app.listen(3002,()=>{
    console.log("Server is runnimg on port 3002")
})

const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'infostudentdb'
})

app.post('/',(req,res)=>{

    const sentname=req.body.name
    const sentsurname=req.body.surname
    const sentphonenumber=req.body.phonenumber
    const sentschoolnumber=req.body.schoolnumber
    const sentgrade=req.body.grade

    const SQL='INSERT INTO users(name,surname,phoneNumber,schoolNumber,grade) VALUES (?,?,?,?,?)'
    const Values=[sentname,sentsurname,sentphonenumber,sentschoolnumber,sentgrade]

    db.query(SQL,Values,(err,results)=>{
        if(err){
            res.send(err)
        }else{
            console.log('User inserted')
            res.send({message:"User added"})
        }
    })


})