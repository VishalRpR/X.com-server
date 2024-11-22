import mongoose, { mongo } from "mongoose";

const commentSchema=mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]

    },
    commentable:[{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"onModel"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
})

const Comment = mongoose.model("Comment",commentSchema);

export default Comment;

