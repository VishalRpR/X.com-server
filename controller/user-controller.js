import { StatusCodes } from "http-status-codes";
import UserService from "../services/user-service.js";

const userService = new UserService();
async function Signup(req, res) {
    try {
        console.log("request reached")
        const response = await userService.Signup({
            email: req.body.email,
            password: req.body.password
        })
        console.log(response)
        const SuccessResponse = {
            message: "sucessfully signed up user",
            data: response,
            status: "OK",
            err: {}
        }


        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error)
        const ErrorResponse = {
            message: "Error occured while signing up user",
            data: {},
            status: "BAD",
            err: error
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}


async function Signin(req, res) {
    try {
        console.log(req.body)
        const response = await userService.Signin({
            email: req.body.email,
            password: req.body.password
        })



        const SuccessResponse = {
            message: response ? "sucessfully signed in user" : "bad request either password wrong or emailnot found",
            data: response,
            status: response ? "OK" : "BAD",
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




export { Signup, Signin}