import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import  {DB_URI} from './config/server-config.js';

import tweetRepository from './repository/tweet-repository.js';

import router from './routes/index.js';
import bodyParser from 'body-parser';
import LikeService from './services/like-service.js';
import passport from 'passport';
import cors from "cors"
import passportAuth from './config/jwt-middleware.js';

const app=express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

passportAuth();
app.use(passport.initialize());

app.use('/api', router)
app.listen(3000,async()=>{
    console.log('Listening on port 3000');
    await mongoose.connect(DB_URI);
    
    console.log("Db connected")
        
})