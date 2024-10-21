import express from "express";
import { createTweet, getTweet } from "../controller/tweet-controller.js";
import { Signin, Signup } from "../controller/user-controller.js";
import createComment from "../controller/comment-controller.js";


const router = express.Router();
console.log("in router")
router.post('/tweet',createTweet);
router.get('/tweet/:id', getTweet);
router.post('/user/signup',Signup);
router.post('/user/signin', Signin);
router.post('/comment',createComment);


export default router