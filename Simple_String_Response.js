var express=require('express');

app=express();


app.get("/one",function (req, res) {
    res.send("this is simple string response");
    //res.send= body of response
})

app.post("/two",function (req, res) {
    res.end("this is simple string response");
    //res.end() = ending point of response
})



app.listen(5050,function () {

    console.log("Server run success");

})