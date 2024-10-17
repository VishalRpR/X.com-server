import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";


class HashtagRepository extends CrudRepository {
    constructor() {
        super(Hashtag);
    }


    async getByName(text) {
        
        try {
            // console.log(text)
          
        
            const response = await Hashtag.find({
                text: text
            })

            return response;
        } catch (error) {
            console.log(error);
            throw error;

        }
    }



    async bulkInsert(data) {
        try {
            const response = await Hashtag.insertMany(data)
            // console.log(response)
            return response;

        } catch (error) {

        }

    }
}

export default HashtagRepository;