import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository {
  constructor() {
    super(Hashtag);
  }

  async getByName(text) {
    try {
      const response = await Hashtag.find({
        text: text,
      });

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getByRegex(regextext) {
    try {
      const response = await Hashtag.find({
        text: {
          $regex: regextext,
        },
      });

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async bulkInsert(data) {
    try {
      const response = await Hashtag.insertMany(data);
      return response;
    } catch (error) {}
  }
}

export default HashtagRepository;
