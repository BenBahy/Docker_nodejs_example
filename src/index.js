const express = require('express');
const mongoose = require('mongoose');

// init app
const app = express();
const PORT = process.env.PORT || 4000;

// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_HOST = 'mongo';
const DB_PORT = '27017';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI)
    .then(() => console.log("connected to db..."))
    .catch((error) => console.log("failed to connect to db: ", error));

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
