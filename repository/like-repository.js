import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findBYUserAndLikable(data) {
    try {
      const response = await Like.findOne(data);

      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default LikeRepository;
