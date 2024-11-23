import { StatusCodes } from "http-status-codes";
import passport from "passport";

async function authenticate(req, res, next) {
   passport.authenticate('jwt', { session: false },(err, user, info) => {
           if (err) {
               return next(err);  // If there is an error, pass it to the next middleware
           }
          
           if (!user) {
               return res.status(StatusCodes.UNAUTHORIZED).json({
                   message: "Unauthorized user"
               });
           }

           // If authentication is successful, attach the user to the request object
           req.user = user;
           next();  // Proceed to the next middleware/route handler

   })(req, res, next)
}

export default authenticate;