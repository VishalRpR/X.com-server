import TweetService from "../services/tweet-service.js";
import { StatusCodes } from "http-status-codes"

const tweetService = new TweetService();

async function createTweet(req, res) {
    
    try {
        console.log("hi in controller")
        const response= await tweetService.createTweet({
            content:req.body.content,
            likes:req.body.likes,
            noOfRetweet: req.body.noOfRetweet,
            comments:req.body.comments

        });

      
        
        const SuccessResponse={
            data: response,
            status:"OK",
            err:{},
            message:"Successfully crated the Tweet"


        }

        return res
                  .status(StatusCodes.OK)
                  .json(SuccessResponse)
            
    }
    catch (error) {
        console.log(error)


        const ErrorResponse = {
            data: response,
            status: "OK",
            err: {},
            message: "Successfully crated the Tweet"


        }
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
        
    }
}

export { createTweet }