import express from 'express';
import Tweet from './models/tweet.js';

import {connect} from './config/database.js';

const app = express();

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    let myFirstTweet = await Tweet.findById("65277d7253a7bc370d46a201")
    console.log(myFirstTweet,typeof myFirstTweet);
});