import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        max: [250, "max limit is 250"]
    },
    password: {
        type: String,
        requiered: true
    }
}, { timestamps: true })

userSchema.pre('save', function (next) {
    // Modify the document or perform additional tasks
    const saltRounds = 10;
    const hashed = bcrypt.hashSync(this.password, saltRounds)
    this.password = hashed;
    next();
});

userSchema.methods.comparepass=function(password){
    const check=bcrypt.compareSync(password, this.password);
    console.log(check)
        return check;
}
const User = mongoose.model("User", userSchema);

export default User;