const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const fileupload=require('express-fileupload');
const mycon=require('mysql');
const { request, response } = require('express');
const app=express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));


const c=mycon.createConnection({
    host:"localhost",
    post:3306,
    user:"root",
    password:"Msd@007",
    database:"Crud_app"
})
c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Database connected');
    }
})
app.post('/Create_user',(request,response)=>{
    let {name,email,phone,password}=request.body;
    let sql='insert into signup(username,password,name,email,phone,status)values(?,?,?,?,?,?)';
    c.query(sql,[email,password,name,email,phone,0],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
app.get('view_user',(request,response)=>
{
    let sql='select*from signup';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})
app.listen(3003,()=>{
    console.log('3003 port number is running');
})