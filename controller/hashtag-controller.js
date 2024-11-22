import { StatusCodes } from "http-status-codes";
import HashtagSevice from "../services/hashtag-service.js";


const hashtagService = new HashtagSevice();

async function getHashtagAll(req, res) {

    try {
        console.log("hi in controller")
        const response = await hashtagService.getHashtagAll();
        const SuccessResponse = {
            data:response,
            status: "OK",
            err: {},
            message: "Successfully fetched the Hashtags"

        }

        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)

    }
    catch (error) {
        console.log(error)
        const ErrorResponse = {
            data: response,
            status: "BAD",
            err: {},
            message: "Not able to fetch the Hashtags"
        }
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)

    }
}


async function getHashtagregex(req, res) {

    try {
       
       
        const response = await hashtagService.getHashtagregex(req.query.text);
        const SuccessResponse = {
            data: response,
            status: "OK",
            err: {},
            message: "Successfully fetchingregex Hashtag"

        }

        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)

    }
    catch (error) {
        console.log(error)
        const ErrorResponse = {
            data: response,
            status: "BAD",
            err: {},
            message: "Not able to fetch the  regex Hashtags"
        }
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)

    }
}


export {
    getHashtagAll, getHashtagregex

} 