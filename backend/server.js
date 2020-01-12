const express = require("express");
const mysql = require("mysql")


const app = express();

app.listen(5000, ()=>{
    console.log("Connected to port 5000")
})