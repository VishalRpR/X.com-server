import lib from "http-status-code";
import { LikeRepository, TweetRepository } from "../repository/index.js";



class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(userId, modelId, modelType) {
       
        try {
            if (modelType == "Tweet") {
                var likable = await this.tweetRepository.find(modelId);
              
                console.log("likabletweet",likable);
            } else if (modelType == "Comment") {
                //TODO
            } else {
                throw new Error("bad modelType")
            }

            const exists = await this.likeRepository.findBYUserAndLikable({
                onModel: modelType,
                likable: modelId,
                user: userId
            })
               console.log("existslikeobj",exists)


          

            if(exists) {
                console.log("exits")
                likable.likes.pull(exists.id);
                await likable.save();
                console.log("saved")
                // const remove=await this.likeRepository.;
                await exists.deleteOne();
                console.log("removed")
            }else {
                console.log("NOT exits")
                const like = await this.likeRepository.create({
                    onModel: modelType,
                    likable: modelId,
                    user: userId
                })
                likable.likes.push(like);
                await likable.save();
                console.log(like);
                console.log(likable);


                // console.log(likable);
            }






        } catch (error) {

        }
    }


}


export default LikeService;