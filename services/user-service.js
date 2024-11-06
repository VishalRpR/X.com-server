import UserRepository from "../repository/user-repository.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/server-config.js";
import User from "../models/user.js";
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }


    async Signup(data) {
        try {
            const check = await this.userRepository.getByEmail(data.email)
            if (check) {
                throw new Error("User already exists")

            }
            console.log("reached here or not")

            const response = await this.userRepository.create(data);
            return response;
        } catch (error) {

           
            throw error;

        }
    }


    async Signin(data) {
        try {
            const response = await this.userRepository.getByEmail(data.email)
            console.log(response)
            const check = response.comparepass(data.password);


            if (check) {
                const token = jwt.sign({ id: response.id, email: response.email }, JWT_SECRET);
                return token;
            };

            return false;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async  getUser(email){
      try {
          const user = await this.userRepository.getByEmail(email);
          console.log(user)
          return user
          
        
      } catch (error) {

        console.log(error)
        
      }
    }




}



export default UserService;