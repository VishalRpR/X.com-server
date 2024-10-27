import { HashtagRepository } from "../repository/index.js";



class HashtagSevice {
    constructor(){
        this.hashtagRepository = new HashtagRepository();
    }
async  getHashtagAll(){
    try {
        const response=this.hashtagRepository.getAll();
        return response;
    } catch (error){

        console.log(error);
        throw error;
        
    }
}
}

export default HashtagSevice;