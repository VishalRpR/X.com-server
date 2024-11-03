import error from "mongoose/lib/error/index.js";
import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(modelType, modelId, userId, content) {
        try {
            if (modelType == "Tweet") {
                var commentable = await this.tweetRepository.get(modelId);

            } else if (modelType == "Comment") {
                var commentable = await this.commentRepository.get(modelId)
            } else {
                throw new Error("bad request man try one more time")
            }

            const comment = await this.commentRepository.create({
                content: content,
                onModel: modelType,
                commentable: modelId,
                userId: userId
            })

            commentable.comments.push(comment)
            await commentable.save();

            return comment;


        } catch (error) {
            console.log(error);
            throw error;
        }

    }




    async getComments(modelId) {
        try {


            const commentable = await this.commentRepository.getbyfilter(modelId)

            return commentable


        }catch{
            console.log(error)
            throw error


        }
    }
}
export default CommentService;