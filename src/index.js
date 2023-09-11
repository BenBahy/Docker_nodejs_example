const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

// init app
const app = express();
const PORT = process.env.PORT || 4000;

// connect to redis
const REDIS_HOST = 'redis';
const REDIS_PORT = '6379';
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});

redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to redis...'));

redisClient.connect();

// connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_HOST = 'mongo';
const DB_PORT = '27017';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI)
    .then(() => console.log("connected to db..."))
    .catch((error) => console.log("failed to connect to db: ", error));

app.get('/', async (req, res) => {
    await redisClient.set('products', 'products...');
    res.send('<h1>Hello World!</h1>');
});

app.get('/data', async (req, res) => {

    const value = await redisClient.get('products');
    res.send(`<h1>Hello World!</h1><h2>${value}</h2>`);
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
