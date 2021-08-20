

const express = require("express");
const cors = require("cors");

const app = express();




app.use(cors());

console.log(__dirname);
app.use('/frontend', express.static(__dirname +'/frontend'));


app.get("/see", (req, res)=>{
    res.send("Seenede")
})

app.post("/submit", (req, res)=>{
    res.status(200).json("success");
})


app.listen(4000, ()=> console.log("listening in port 4000"));