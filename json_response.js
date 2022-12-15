var express=require('express');

app=express();



app.get("/one",function (req, res) {
    let MyJSONArray=[
        {
            name:"shahadat Hossain",
            City:"Dhaka",
            Status:"Engineer"
        },
        {
            name:"Hridoy",
            City:"Dhaka",
            Status:"Engineer"
        },
        {
            name:"Sahadat",
            City:"Munshiganj",
            Status:"Engineer"
        },
        {
            name:"thisissahadat",
            City:"Munshiganj",
            Status:"Engineer"
        }
    ]
    res.json(MyJSONArray);
})



app.listen(5000,function () {

    console.log("Server run success");

})