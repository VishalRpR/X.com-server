import express from "express";
import { createTweet, getTweet, getTweetAll } from "../controller/tweet-controller.js";
import {  getUser, getUserById, Signin, Signup } from "../controller/user-controller.js";
import { createComment, getComment, getComments } from "../controller/comment-controller.js";
import toggleLike from "../controller/like-controller.js";
import authenticate from "../middlewares/authenticate.js";
import HashtagRepository from "../repository/hashtag-repository.js";
import {getHashtagAll, getHashtagregex } from "../controller/hashtag-controller.js";
import User from "../models/user.js";



const router = express.Router();
console.log("in router")
router.post('/tweet', authenticate,createTweet);
router.get("/hashtag",getHashtagAll)
router.get("/hashtag/bulk", getHashtagregex)
router.post("/like",authenticate,toggleLike)
router.get('/tweet/:id', getTweet);
router.get('/tweet', getTweetAll)
router.post('/user/signup',Signup);
router.get('/user/', authenticate,getUser)
router.get('/user/id/:user', authenticate, getUserById)

router.post('/user/signin', Signin);
router.post('/comment',authenticate,createComment);
router.get('/comment',authenticate,getComments)
router.get('/comment/:id', authenticate, getComment)


export default router