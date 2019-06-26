const express = require('express');
const app = express();
app.listen(8080);
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method === "OPTIONS") res.send(200);
    else next();
});
app.get('/getData',function(req,res){
    res.json({
        items:[1,2,3,4,5]
    });
});
app.get('/getDataJsonp',function(req,res){
    res.jsonp({
        items:[5,4,3,2,1]
    });
});