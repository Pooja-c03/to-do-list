const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

let tasks = [];
app.get('/', (req, res)=>{
    res.render('index', {tasks: tasks});
});
