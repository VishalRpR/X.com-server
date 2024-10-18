import UserRepository from "../repository/user-repository.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }


    async Signup(data) {
        try {
            const response =await this.userRepository.create(data);
            return response;
        } catch (error) {

            console.log(error);
            throw error;

        }
    }


    async Signin(data){
        try {
            const response=await this.userRepository.getByEmail(data.email)
       
            const check = bcrypt.compareSync(data.password,response.password)
            console.log(check)
            if (check){
                   const token=jwt.sign({response}, 'vishalsecrete', { expiresIn: 60 * 60 });
                   return token;
            };
             
            return false;
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}



export default UserService;