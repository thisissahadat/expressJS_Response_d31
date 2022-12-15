var express=require('express');

app=express();



app.get("/",function (req, res) {
    res.status(401).end("Unauth...")
})



app.listen(6000,function () {

    console.log("Server run success");

})