const express=require('express');

const app=express();

app.get('/api/main',function(req,res){
    console.log("this is api/main page")
    res.send({message:"respond from api/main page"})
})
app.listen(5050,function(){
    console.log("server is running at port 5050")
})