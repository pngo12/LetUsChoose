require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.listen(process.env.PORT, () => console.log(`running on ${process.env.PORT}`));

app.use('/', router);

module.exports = app;