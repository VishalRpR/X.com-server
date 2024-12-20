import { uploadFile } from "../config/uploadfiles-and-aws-s3-config.js";
import { tweetSchema } from "../config/zod.js";
import TweetService from "../services/tweet-service.js";
import { StatusCodes } from "http-status-codes";

const tweetService = new TweetService();

async function createTweet(req, res) {
  try {
    console.log("hi in controller");
  
    req.body.user = req.user._id;
   
    if(req.file){
    const fileUrl = await uploadFile(req.file);
    req.body.image = fileUrl;
    
    }

   
    const parseddata = tweetSchema.safeParse(req.body);
    if (!parseddata.success) {
      return res.status(400).json({
        message: "invalid input",
      });
    }
    const response = await tweetService.createTweet(parseddata.data);

    const SuccessResponse = {
      data: response,
      status: "OK",
      err: {},
      message: "Successfully crated the Tweet",
    };
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    const ErrorResponse = {
      data: response,
      status: "OK",
      err: {},
      message: "Successfully crated the Tweet",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
}

async function getTweet(req, res) {
  try {
    console.log("hi in controller");
    const response = await tweetService.getTweet(req.params.id);
    const SuccessResponse = {
      data: response,
      status: "OK",
      err: {},
      message: "Successfully fetched the Tweet",
    };

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    const ErrorResponse = {
      data: response,
      status: "OK",
      err: {},
      message: "Not able to fetch the tweet",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
}
async function getTweetAll(req, res) {
  try {
    console.log("hi in controller");
    const response = await tweetService.getTweetAll();
    const SuccessResponse = {
      data: response,
      status: "OK",
      err: {},
      message: "Successfully fetched the Tweet",
    };

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    const ErrorResponse = {
      data: response,
      status: "OK",
      err: {},
      message: "Not able to fetch the tweet",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
}

export { createTweet, getTweet, getTweetAll };
