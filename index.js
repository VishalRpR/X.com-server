import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import  {DB_URI} from './config/server-config.js';
import Tweet from './models/tweet.js';
import tweetRepository from './repository/tweet-repository.js';
import hashtagRepository from './repository/hashtag-repository.js';
import TweetService from './services/tweet-service.js';
import router from './routes/index.js';
import bodyParser from 'body-parser';
const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', router)
app.listen(3000,async()=>{
    console.log('Listening on port 3000');
    await mongoose.connect(DB_URI);
    
    console.log("Db connected")



       const tweetRppo= new tweetRepository();
    //    const response=await tweetRppo.getAll();

    // const hashRppo= new hashtagRepository();
    // const response=await hashRppo.create({
    //     text:"future",
    //     tweets:["670e505ed745658130ba9293"]
    // });

    // const tweetServe=new TweetService();
    // await tweetServe.createTweet({
    //     content:"hi thifdfds is my first tweet #tweeter #terero #playefffrtt"
    // })

    
       
    // const response=await tweetRppo.delete({
    //     _id:"670e505ed745658130ba9293"
    // })

    // console.log(response)
})