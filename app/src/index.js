const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

// Config
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => res.send("<h2>API Node</h2>"));

//DB Test Connect
mongoose.connect('mongodb://test:secret@mongo:27017/test', {
    useNewUrlParser: true,
})
.then(result => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(PORT, HOST);
