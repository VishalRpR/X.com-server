import { StatusCodes } from "http-status-codes";
import LikeService from "../services/like-service.js";
const likeService = new LikeService();
async function toggleLike(req,res){
    try {
        const response = await likeService.toggleLike(req.body.userId, req.query.modelId, req.query.modelType);
        return res.status(StatusCodes.OK).json({
            message:"sucessfully toggled the like",
            data:response,
            status:"OK",
            err:{}

        })
    } catch (error) {

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Error while toggleing the like",
            data:{},
            status:"BAD",
            err:error
        }
        )
    }
    
}

export default toggleLike;