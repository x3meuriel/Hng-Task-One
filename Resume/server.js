

const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());

console.log(__dirname);
app.use('/frontend', express.static(__dirname +'/frontend'));



app.post("/submit", (req, res)=>{
    //console.log(req.body);
    const {name, email, subject, message} = req.body;
    if(name != ""  && email != "" && subject != ""   && message != "" ){
         res.status(200).json({status: "success", body: `Hy, ${name}, I got your message. You will hear from me soon`});
    }
    else{
        res.status(400).json({status: "Failed", body: `All Fields are required`});
    }
})


app.listen(process.env.PORT || 3000, ()=> console.log("listening in port 4000"));