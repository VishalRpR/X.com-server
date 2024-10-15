class CrudRepository{
      constructor(model){
        this.model=model;
      }


      async create(data){
        try {
          const response=await  this.model.create(data);
          return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
        
      }


      async getAll(){
        try {
            const response= await  this.model.find();
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
      }


      async get(id){
        try {
            const response= await this.model.findById(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
      }


      async delete(id){
        try {
            const response=await this.model.deleteOne(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
      }




}


export default CrudRepository;