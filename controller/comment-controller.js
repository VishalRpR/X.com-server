import { StatusCodes } from "http-status-codes";
import CommentService from "../services/comment-service.js";
const commentService=new CommentService();

async function createComment(req,res){
      try {
          const response = await commentService.createComment(
            req.query.modelType,
            req.query.modelId,
            req.body.userId,
            req.body.content
        )

        return res.status(StatusCodes.OK).json({
            message:"comment created sucessfully",
            data:response,
            status:"OK",
            err:{}
            
        })
      } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"failed to create a comment",
            data:{},
            status:"BAD",
            err:error
        })
      }
}

export default createComment;