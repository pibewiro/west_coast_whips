const express = require("express");
const router = express.Router();
const {Pool} = require('pg');
const env = require("../config/.env")
const pool = new Pool(env);

router.post("/register", async (req,res)=>{
    const client = await pool.connect()
    console.log(req.body)
    try
    {
        const query = 'SELECT * FROM users'
        const res = await client.query(query)
        const result = res.rows
        console.log(result)
        // return response.status(200).json(result)
    }

    catch(err){
        console.log(err)
    }

    finally
    {
        client.release();
    } 
})

module.exports = router;

