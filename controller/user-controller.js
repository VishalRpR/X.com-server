import { StatusCodes } from "http-status-codes";
import UserService from "../services/user-service.js";
import { z } from "zod"
import { parse } from "dotenv";

const userService = new UserService();

const Signschema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

async function Signup(req, res) {
    try {

        const parsedata = Signschema.safeParse(req.body)

        if (!parsedata.success) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "invalid creds"

            })
        }
       
        const response = await userService.Signup(parsedata.data)
       
        const SuccessResponse = {
            message: "sucessfully SIGNED UP user",
            data: response,
            status: "OK",
            err: {}
        }


        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        
        const ErrorResponse = {
            message: error.message ? error.message :"Error occured while signing up user",
            data: {},
            status: "BAD",
            err: error
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}


async function Signin(req, res) {
    try {
      

        const parseddata = Signschema.safeParse(req.body)
         
        if (!parseddata.success) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: "Invalid creds"
            })
        }
        const response = await userService.Signin(parseddata.data)



        const SuccessResponse = {
            message: "sucessfully SIGNED IN user",
            data: response,
            status: "OK",
            err: {}
        }


        return res.status(StatusCodes.OK).json(SuccessResponse);


    } catch (error) {
        const ErrorResponse = {
            message: "Error occured while signing in user",
            data: {},
            status: "BAD",
            err: error
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}



async function getUser(req, res) {
    try {
        console.log("request reached")
       
        const response = await userService.getUser(req.user.email)
        const data = {
            email: response.email,
            id: response._id
        }
        const SuccessResponse = {
            message: "sucessfully fetched the user",
            data: data,
            status: "OK",
            err: {}
        }


        return res.status(StatusCodes.OK).json(SuccessResponse);



    } catch (error) {
        console.log(error)

    }

}


async function getUserById(req, res) {
    try {
        console.log("request reached")
       
        const response = await userService.getUserById(req.params.user)
        const data = {
            email: response.email,
            id: response._id
        }
        const SuccessResponse = {
            message: "sucessfully fetched the user",
            data: data,
            status: "OK",
            err: {}
        }


        return res.status(StatusCodes.OK).json(SuccessResponse);



    } catch (error) {
        console.log(error)

    }
}




    export { Signup, Signin, getUser, getUserById }