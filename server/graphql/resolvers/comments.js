const Lesson = require('../../models/Lesson'); 
const checkAuth = require('../../Util/auth'); 
const {UserInputError} = require('apollo-server'); 

module.exports = {
    Mutation: {
        createComment : async (_, {lessonId, body}, context) => {
            const {username} = checkAuth(context); 
            console.log(username);
            if(body.trim() === ''){
                throw new UserInputError("Empty Comment", {errors: {
                    body: 'Body must not be empty'
                }
            })
            }
            const lesson = await Lesson.findById(lessonId); 
            if(lesson){
                lesson.comments.unshift({
                    content: body, 
                    username: username,  
                    createdAt: new Date().toISOString()
                });
                lesson.save(); 
                return lesson; 
            } 
            else throw new UserInputError("No lesson", {errors: {
                    body: 'Lesson does not exist'
            }
        })
        }
    }
}