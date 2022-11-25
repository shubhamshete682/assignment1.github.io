const express = require('express');
const fs = require("fs");
const port = 7788;
const app = express();//create objext of express

app.use(express.json());
app.use(express.urlencoded({ extended: false }))





app.get("/", (req, res) => {


    res.sendFile(__dirname + "/index.html")
    let create = req.body.create;

})

//-------------Create file-----------------//
app.get("/createfile", (req, res) => {


    if(fs.existsSync("neosoft.txt")){
        res.write("<script> alert('file exist')</script>;<script> location.assign('/')</script>");
    }
    else{
        fs.writeFile('neosoft.txt',"Welcome to Neosoft !",(err)=>{
            if(err) throw err
            else res.write("<script> alert('file created')</script>;<script> location.assign('/')</script>");
        })
    }

})

//-------------Read file-----------------//
app.get("/readdata", (req, res) => {


    if(fs.existsSync("neosoft.txt")){
        let data=fs.readFileSync("neosoft.txt");
        res.end(data.toString());
    }
    else{
        res.write("<script> alert('file not found')</script>;<script> location.assign('/')</script>");
    }



})

//-------------Delete file-----------------//
app.get("/deletefile", (req, res) => {



    if(fs.existsSync("neosoft.txt")){
        fs.unlink("neosoft.txt",(err)=>{
            if(err) throw err
            else res.write("<script> alert('file deleted')</script>;<script> location.assign('/')</script>");
        })
    }
    else{
        res.write("<script> alert('file not exist')</script>;<script> location.assign('/')</script>");
    }

})

//-------------Update file-----------------//
app.get("/updatefile", (req, res) => {

    if(fs.existsSync("neosoft.txt")){
        fs.existsSync("neosoft.txt")
            fs.appendFile("neosoft.txt","Data Added!",(err)=>{
                if (err) throw err
                else res.write("<script> alert('file updated')</script>;<script> location.assign('/')</script>");;
            });
        
    }
    else{
        res.write("<script> alert('file not found')</script>;<script> location.assign('/')</script>");
    }




})

//-------------Port error-----------------//
app.listen(port,(err)=>{
    if(err) throw err
    else{
        console.log('Server work on ${PORT}')
    }
})