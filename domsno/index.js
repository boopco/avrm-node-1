const express = require('express');
const handlers = require('./handlers');
const bodyParser = require('body-parser');

// application object
let app = express();

// adding middleware
app.use(bodyParser.urlencoded({extended: true}));

// route
app.get("/", handlers.index);
app.post("/", handlers.post);

// starter
app.listen(8080, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Started server on port 8080');
});