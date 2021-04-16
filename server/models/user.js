const {model, Schema} = require('mongoose'); 


const userSchema = new Schema({
    username: String,
    password: String, 
    userType: String, 
    createdAt: String, 
}); 


module.exports = model("User", userSchema); 