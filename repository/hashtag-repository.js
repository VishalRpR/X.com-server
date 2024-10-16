import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";


class HashtagRepository extends CrudRepository{
    constructor(){
        super(Hashtag);
    }


    async getByName(data){
        try {
            const response=await Hashtag.find(  {
                text: { $in: data } 
              },
              {
                text: 1,
                _id: 0
              })


            return response;
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }



    async bulkInsert(data){
        try {
            const response=await Hashtag.insertMany(data)
            console.log(response)
            return response;
          
        } catch (error) {
            
        }

    }
}

export default HashtagRepository;