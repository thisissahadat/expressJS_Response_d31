var express=require('express');

app=express();



app.get("/one",function (req, res) {
    res.cookie("Name","Shahadat")
    res.cookie("Age","23")
    res.cookie("city","Dhaka")
    res.status(201).end("Hello world")
})
app.get("/two",function (req, res) {
    res.clearCookie('Name')
    res.clearCookie('Age')
    res.end("Cookie clear Success")

})




app.listen(1011,function () {

    console.log("Server run success");

})