var express=require('express');

app=express();



app.get("/one",function (req, res) {
    res.append("Name","Shahadat")
    res.append("Age","23")
    res.append("city","Dhaka")
    res.status(201).end("Hello world")
})


app.listen(1000,function () {

    console.log("Server run success");

})