import {
  CommentRepository,
  LikeRepository,
  TweetRepository,
} from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
    this.commentRepository = new CommentRepository();
  }

  async toggleLike(userId, modelId, modelType) {
    try {
      if (modelType == "Tweet") {
        var likable = await this.tweetRepository.find(modelId);
      } else if (modelType == "Comment") {
        var likable = await this.commentRepository.find(modelId);
      } else {
        throw new Error("bad modelType");
      }

      const exists = await this.likeRepository.findBYUserAndLikable({
        onModel: modelType,
        likable: modelId,
        user: userId,
      });

      let isAdded;

      if (exists) {
        likable.likes.pull(exists.id);
        await likable.save();
        await exists.deleteOne();
        isAdded = false;
      } else {
        const like = await this.likeRepository.create({
          onModel: modelType,
          likable: modelId,
          user: userId,
        });
        likable.likes.push(like);
        await likable.save();

        isAdded = true;
      }

      return isAdded;
    } catch (error) {}
  }
}

export default LikeService;
