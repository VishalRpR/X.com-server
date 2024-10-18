import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    likes:{
        type:Number
    },
    hashtags:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag"
    }],

    noOfRetweet:{
        type:Number
    },
    comments:{
        type:String
    }
});


const Tweet=mongoose.model('Tweet',tweetSchema);


export default Tweet;

