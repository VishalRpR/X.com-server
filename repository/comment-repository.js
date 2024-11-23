import Comment from "../models/comment.js";
import CrudRepository from "./crud-repository.js";

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }

  async find(id) {
    try {
      const response = await this.model
        .findById(id)
        .populate({ path: "likes" });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default CommentRepository;
