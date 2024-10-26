import express from "express";
import { createTweet, getTweet, getTweetAll } from "../controller/tweet-controller.js";
import {  Signin, Signup } from "../controller/user-controller.js";
import createComment from "../controller/comment-controller.js";
import toggleLike from "../controller/like-controller.js";
import authenticate from "../middlewares/authenticate.js";


const router = express.Router();
console.log("in router")
router.post('/tweet', authenticate,createTweet);
router.post("/like",authenticate,toggleLike)
router.get('/tweet/:id', getTweet);
router.get('/tweet', getTweetAll)
router.post('/user/signup',Signup);

router.post('/user/signin', Signin);
router.post('/comment',authenticate,createComment);


export default router