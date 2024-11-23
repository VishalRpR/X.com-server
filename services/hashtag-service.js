import { HashtagRepository } from "../repository/index.js";

class HashtagSevice {
  constructor() {
    this.hashtagRepository = new HashtagRepository();
  }
  async getHashtagAll() {
    try {
      const response = this.hashtagRepository.getAll();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getHashtagregex(text) {
    try {
      const response = await this.hashtagRepository.getByRegex(text);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default HashtagSevice;
