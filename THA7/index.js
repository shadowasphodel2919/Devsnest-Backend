const express = require("express");
const app = express();

// CRUD -> POST, GET, PUT, DELETE
/* const slash = (req,res) => {
    res.send("Hello");
};

const slash1 = (req,res) => {
    res.send("Hello slash1");
}
app.get('/',slash);
app.post('/',slash);
app.put('/',slash1);
app.delete('/',slash1); */

//security,performance, edge cases

//200->ok
//201->updation
//400->Bad Request
//500->servercrashed
app.get('/',(req,res) => {
    /* res.sendStatus(500);
    res.send(); */    

    //res.send => return
    
    res.status(500).send("database not connecting");
});

app.get('/products', (req, res) => {
    /* req.query = {
        limit: 50,
        q: "something"
    } */

    //encodeURIcomponent("link")---> to chrome link
    res.send(req.query);
});

app.get('/ab?cd',(req,res) => {// /acd,abcd
    res.send("abcd");
});
app.get('/ab+cd',(req,res) => {// abcd, abbbbcd
    res.send("abcd");
});
app.get('/ab*cd',(req,res) => {// abcd, absfsrgcd
    res.send("abcd");
});
app.get('/ab(cd)?e',(req,res) => {// cd is optional
    res.send("abcd");
});
app.get(/a/,(req,res) => {// starting should be a
    res.send("abcd");
});
app.get(/.*fly$/,(req,res) => {//fly should be present
    res.send("abcd");
});
app.get('/users/:userId/books/:bookId',(req,res) => {// :userId -> it is dynamic
    console.log(res.query);
    res.send(req.params.id);
});
app.listen(5000);