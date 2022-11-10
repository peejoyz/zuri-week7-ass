const express  = require('express');
const {json} = require('express');
const connect = require('./config/database');
connect() // for db

const app = express();

const task = require('./routes/task')

app.use(json());

app.use('/task', task);

const port = 8000;

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`Server listening on port ${port}`);
    }
})