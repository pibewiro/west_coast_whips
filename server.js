const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const path = require("path");

require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors())


app.use("/users", require("./routes/user"))

if(process.env.NODE_ENV === "production")
{
    app.use(express.static("frontend/build"))

    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}


app.listen(5000, ()=>{
    console.log("Connected to port 5000")
})