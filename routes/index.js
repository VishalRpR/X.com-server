import express from "express";
import { createTweet } from "../controller/tweet-controller.js";
import { Signin, Signup } from "../controller/user-controller.js";


const router = express.Router();
console.log("in router")
router.post('/tweet',createTweet);
router.post('/user/signup',Signup);
router.post('/user/signin', Signin);


export default router