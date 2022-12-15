var express=require('express');

app=express();



app.get("/",function (req, res) {
    res.download("./uploads/bird.png");
})



app.listen(6060,function () {

    console.log("Server run success");

})