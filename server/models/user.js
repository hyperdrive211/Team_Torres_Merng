const {model, Schema} = require('mongoose'); 


const userSchema = new Schema({
    username: String,
    password: String, 
    userType: String, 
    createdAt: String, 
    rank: String, 
    isMember: Boolean, 
    membershipPackage: String, 
    paymentType: String, 
}); 


module.exports = model("User", userSchema); 