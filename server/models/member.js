const {model, Schema} = require('mongoose'); 

const memberSchema = new Schema({
    username: String, 
    fullName: String, 
    joinedAt: String, 
    imageThumbnailUrl:String,
    membershipType: String, 
    beltRank: String
})


module.exports("member", memberSchema); 