const {model, Schema} = require('mongoose'); 

const instructorSchema = new Schema({
    username: String, 
    fullName: String, 
    password: String,
    email: String, 
    imageUrl: String, 
    martialArt: String, 
    rank: String
}); 

module.exports = model('Instructor', instructorSchema); 