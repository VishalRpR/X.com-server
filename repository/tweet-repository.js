import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";


class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    async find(id) {
        try {
            const response = await this.model.findById(id).populate({ path:"likes"})
            return response;
        } catch (error) {
              console.log(error)
        }

    }

    async findbyComment(id) {
        try {
            const response =await this.model.findById(id).populate({ path: "comments" })
            return response;
        } catch (error) {
            console.log(error)
        }

    }
}

export default TweetRepository;