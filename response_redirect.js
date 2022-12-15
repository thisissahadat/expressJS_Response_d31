var express=require('express');

app=express();



app.get("/bangladesh",function (req, res) {
    res.redirect("http://localhost:6050/india")
    //res.redirect= redirect a path to open another link
})

app.get("/india",function (req, res) {
    res.send("this is india")
})



app.listen(6050,function () {

    console.log("Server run success");

})