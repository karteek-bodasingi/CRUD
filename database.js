var mysql = require('mysql2');
var express=require('express');
const app =express();
var multer=require("multer");

 var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "Karteek@143",
   database:"sreee"
 });
 con.connect(function(err){
    if(err){
        console.log("Error connecting to db");
    }
    else{
        console.log("Connection established");
    }
})

 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
//    con.query("CREATE DATABASE sreee", function (err, result) {
//      if (err) throw err;
//      console.log("Database created");
//    });
 });
app.use(express.json());
 app.post("/post",(req,res)=>{
    const sql="INSERT INTO customers  (`name`,`age`)Values(?)";    //post operation
    const values =[
       
        req.body.name,
        req.body.age,
    ];
    con.query(sql,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json({Status:"Success"})
        
    })
})


//put operation

const mysql = require('mysql2');
const express = require('express');
// const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Karteek@143",
    database: "sreee"
});
app.use(express.json());
con.connect(function (err) {
    if (err) {
        console.log("Error connecting to db");
    } else {
        console.log("Connection established");
    }
});

app.put(`/put/:id`, (req, res) => {
    const sql = "UPDATE customers SET `name`=?, `age`=? WHERE id=?";
    const id = parseInt(req.params.id, 12); // Parse id as an integer
    con.query(sql, [req.body.name, req.body.age, id], (err, result) => {
        if (err) return res.json({ error: err.message });
        return res.json({ updated: true });
    });
});


 //get operation

 app.use(express.json());
 con.connect(function (err) {
    if (err) {
        console.log("Error connecting to db");
    } else {
        console.log("Connection established");
    }
});
app.get(`/get/:id`,(req,res)=>{
    const sql="select * from customers where id=?";
    const id = parseInt(req.params.id, 10);
    con.query(sql,[id],(err,result)=>{
        if(err) return res.json({Error:err});
        return res.json(result);
    })
})


//delete operation



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
