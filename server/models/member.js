const {model, Schema} = require('mongoose'); 

const memberSchema = new Schema({
    username: String, 
    email: String,
    fullName: String, 
    joinedAt: String, 
    imageThumbnailUrl:String,
    membershipType: String, 
    beltRank: String
})


module.exports = model("member", memberSchema); 