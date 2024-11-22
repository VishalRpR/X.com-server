import JWT from "passport-jwt";
import { JWT_SECRET } from "./server-config.js";
import User from "../models/user.js";
import passport from "passport";

    const JwtStrategy = JWT.Strategy;
    const ExtractJwt =JWT.ExtractJwt;

    const opts={
        jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET
    }

  function passportAuth(){
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) =>{
        try {
            console.log(jwt_payload)
            const user=await User.findOne({ _id: jwt_payload.id,email:jwt_payload.email}) 
              console.log(user)
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
              }
            
            
        } catch (error) {
           
                return done(error, false);
            
        }
       
    }));
}

export default passportAuth;