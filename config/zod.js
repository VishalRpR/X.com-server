import { z } from "zod";
import { ObjectId } from "mongodb";

export const tweetSchema = z.object({
    user: z.instanceof(ObjectId),
    content: z.string().min(1).max(255),
    likes: z.boolean().optional(),
    noOfRetweet:z.number().optional(),
    comments: z.string().optional()
})
