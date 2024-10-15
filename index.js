import express from 'express';
import mongoose from 'mongoose';
import  {DB_URI} from './config/server-config.js';
import Tweet from './models/tweet.js';
import tweetRepository from './repository/tweet-repository.js';
import hashtagRepository from './repository/hashtag-repository.js';
const app=express();



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

    
       
    // const response=await tweetRppo.delete({
    //     _id:"670e505ed745658130ba9293"
    // })

    // console.log(response)
})