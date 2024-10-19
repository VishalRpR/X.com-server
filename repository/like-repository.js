import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    constructor(){

        super(Like);
    }
         
    async findBYUserAndLikable(data){
           console.log("infind")
        try {
            const response = await Like.findOne(data);
            console.log("IN THIS",response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
   

    
}

export default LikeRepository;
