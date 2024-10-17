import express from "express";
import { createTweet } from "../controller/tweet-controller.js";


const router = express.Router();
console.log("in router")
router.post('/tweet',createTweet);

export default router