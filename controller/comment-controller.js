import { StatusCodes } from "http-status-codes";
import CommentService from "../services/comment-service.js";
const commentService=new CommentService();

async function createComment(req,res){
      try {
       
          const response = await commentService.createComment(
            req.query.modelType,
            req.query.modelId,
            req.user.id,
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



async function getComments(req,res){
  try {
    const response = await commentService.getComments(
    
      req.query.modelId,
    )

    return res.status(StatusCodes.OK).json({
      message: "comments fetched sucessfully",
      data: response,
      status: "OK",
      err: {}

    })
  } catch (error) {
    console.log(error)
    throw error;
    
  }
}


async function getComment(req, res) {
  try {
    console.log('req')
    const response = await commentService.getComment(

      req.params.id,
    )

    return res.status(StatusCodes.OK).json({
      message: "comments fetched sucessfully",
      data: response,
      status: "OK",
      err: {}

    })
  } catch (error) {
    console.log(error)
    throw error;

  }
}

export {
  getComments,
  getComment,
  createComment}