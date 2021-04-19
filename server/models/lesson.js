const {model, Schema} = require('mongoose'); 

const lessonSchema = new Schema({
    lessonName: String, 
    lessonType: String, 
    lessonVidLink: String, 
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    },
    createdAt: String, 
    lessonDescription: String, 
    comments: [
        {
            content: String, 
            username :String, 
            createdAt:String
        }
    ], 
    likes: [
        {
            username: String, 
            likedAt:String
        }
    ]    
}); 

module.exports = model('Lesson', lessonSchema); 