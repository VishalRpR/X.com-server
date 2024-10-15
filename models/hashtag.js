import mongoose, { Schema } from "mongoose";

const hashtagSchema = mongoose.Schema({
    text:{
        type:String
    },
    tweets:{
        type:Schema.ObjectId
    }
});


const Hashtag=mongoose.model('Hashtag',hashtagSchema);


export default Hashtag;

