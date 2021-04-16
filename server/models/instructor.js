const {model, Schema} = require('mongoose'); 

const instructorSchema = new Schema({
    username: String, 
    fullName: String, 
    email: String, 
    imageUrl: String, 
    martialArt: String, 
    rank: String,
    createdAt: String
}); 

module.exports = model('Instructor', instructorSchema); 