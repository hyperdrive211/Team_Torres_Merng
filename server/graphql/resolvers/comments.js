const Lesson = require('../../models/Lesson'); 
const checkAuth = require('../../Util/auth'); 
const {UserInputError, AuthenticationError} = require('apollo-server'); 

module.exports = {
    Mutation: {
        createComment : async (_, {lessonId, content}, context) => {
            const {username} = checkAuth(context); 
            console.log(username);
            if(content.trim() === ''){
                throw new UserInputError("Empty Comment", {errors: {
                    body: 'Body must not be empty'
                }
            })
            }
            const lesson = await Lesson.findById(lessonId); 
            console.log(content);
            if(lesson){
                lesson.comments.unshift({
                    content: content,
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
        }, 
        deleteComment : async (_, {lessonId, commentId}, context) => {
            const {username} = checkAuth(context); 

            const lesson = await Lesson.findById(lessonId); 

            if(lesson){
                const commentIndex = lesson.comments.findIndex(c => c.id === commentId); 
                if(lesson.comments[commentIndex].username === username){
                lesson.comments.splice(commentIndex, 1); 
                lesson.save(); 
                return lesson; 
                } 
                throw new AuthenticationError("Action not possible", {error: {
                    body: 'Action not possible'
                }}); 

            } throw new UserInputError('No lesson', {errors: {
                    body: 'Lesson does not exist'
            }
        })
        }
    }
}