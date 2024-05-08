
const express=require('express');
const app=express();
app.get('/',(request,response)=>{
    response.send('hello Boy');
});
app.get('/watch/:type/:rating',(request,response)=>{
 let  {type,rating}=request.params;
 let s=`watch type is ${type} and rating is ${rating}`;
 response.send(s); 
});
app.get(3002,'/htmlpage',(request,response)=>{
    response.sendFile('./appo.html',{root:__dirname});
});
app.listen(3002,()=>{console.log(`app is running in 3002 port`)});
app.listen(3002,()=>{console.log(`running in 3002`)});
app.listen(3002,()=>{console.log(`running in an 3002`)});
