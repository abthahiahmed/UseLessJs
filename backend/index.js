const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors({ origin : '*' }));
app.use(bodyParser.json({ extended : true }));
const data = [
    {
        avatar : "A",
        color : "#003049",
        name : "Abthahi Ahmed Rifat", 
        roll : "10001"
    },
    {
        avatar : "E",
        color : "#c1121f",
        name : "Ehsan Uddin Khaled", 
        roll : "10002"
    },
    {
        avatar : "S",
        color : "#ffb703",
        name : "Shakibul Islam", 
        roll : "10003", 
    },
    {
        avatar : "M",
        color : "#3a86ff",
        name : "Mohammad Ishmam", 
        roll : "10004", 
    },
    {
        avatar : "F",
        color : "#8338ec",
        name : "Faysal Ahmed", 
        roll : "10005", 
    },
];
app.get('/get-students', (req, res)=>{
    console.log("gello wlrl");
    res.json(data);
});
app.listen(4000);