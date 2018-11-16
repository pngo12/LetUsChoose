const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.listen(port, () => console.log(`running on ${port}`));

app.use('/', router);

module.exports = app;