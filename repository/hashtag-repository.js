import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";


class hashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }
}

export default hashtagRepository;