const express = require('express');
const app = express();
const path = require('path');
// console.log(__dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use('/', (req,res) => {
    //send a file with header info using path package
    // res.sendFile(path.join(__dirname,'public/test.json')/* ,'test.json' */);

    // download file
    // res.download(path.join(__dirname, "public/test.json"), "hello.json")

    // res.render('index', {title: "Express"})

    //setting a cookie from backend
    res
    .status(201)
    .cookie("token", "test", {
        expire: new Date(Date.now() + 8 * 3600000)
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin")
})
app.listen(5000);