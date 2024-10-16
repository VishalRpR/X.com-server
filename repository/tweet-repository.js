import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";


class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
}

export default TweetRepository;