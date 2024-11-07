import { z } from "zod";


export const tweetSchema = z.object({
    content: z.string().min(1).max(255),
    likes: z.boolean().optional(),
    noOfRetweet:z.number().optional(),
    comments: z.string().optional()
})
