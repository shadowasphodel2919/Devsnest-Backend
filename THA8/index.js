const express = require('express');
const app = express();
//const bodyParser = require("body-parser");

//middleware execute before main function to check if everything is ok or not
const checkAdmin = (req,res,next) => {
    console.log("In First");
    if(req.query.admin === 'true') {
        next();
    }
    else{
        res.status(400).send("shouldbe admin");
    }
};

const sendRes = (req, res) => {
    res.status(200);
    res.json(req.query);
};
app.use(/* bodyParser */express.urlencoded()); //this function runs middleware before call of every functionv
//is function ka placement upr hona chahiye functioncalls ke
app.use(/* bodyParser */express.json({extended: true}));

//multiple methods passing
/**
 * app.get('/',(req,res,next) => {
    console.log("In First");
    if(req.query.admin === 'true') {
        next();
    }
    else{
        res.status(400).send("shouldbe admin");
    }
}, (req, res) => {
    res.status(200);
    res.json(req.query);
});
 */

/**
 * get request is bit problematic as it will fetchdata from the cache(from where sensitive data can be fetched) so the
 * status after the first time will come 304(not modified) rather than the sent 200(ok).
 */
app.get('/',/* checkAdmin, */ sendRes);
app.post('/', (req,res) => {
    console.log('req.body -> ', req.body);
    res.json({text: req.body})
})
app.listen(5000);