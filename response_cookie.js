var express=require('express');

app=express();



app.get("/one",function (req, res) {
    res.cookie("Name","Shahadat")
    res.cookie("Age","23")
    res.cookie("city","Dhaka")
    res.status(201).end("Hello world")
})


app.listen(1010,function () {

    console.log("Server run success");

})