import mongoose, { mongo } from "mongoose";

const likeSchema=mongoose.Schema({
    onModel:{
        type:String,
        require:true,
        enum:["Tweet","Comment"]
    },
    likable:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"onModel"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

const Like=mongoose.model('Like',likeSchema);

export default Like;