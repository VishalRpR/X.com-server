import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";


class tweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
}

export default tweetRepository;