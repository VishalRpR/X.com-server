import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    content:{
        type:String
    },
    likes:{
        type:Number
    },
    noOfRetweet:{
        type:Number
    },
    comments:{
        type:String
    }
});


const Tweet=mongoose.model('Tweet',tweetSchema);


export default Tweet;

