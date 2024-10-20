import mongoose from "mongoose";

const tweetSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"

    }],
    noOfRetweet:{
        type:Number
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
},{timestamps:true});


const Tweet=mongoose.model('Tweet',tweetSchema);


export default Tweet;

