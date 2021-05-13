const Lesson  = require('../../models/Lesson'); 
const checkAuth = require('../../Util/auth');
const {UserInputError} = require('apollo-server');  
const {validateNewLesson} = require('../../Util/validators'); 

module.exports = {
    Query: {
        getLessons: async () => {
            try{
            const lessons = await Lesson.find(); 
            return lessons; 
            } catch(err) {
                throw new Error(err)
            }
        },   
    getLesson: async (_, {id}) => {
        try {
            const lesson = await Lesson.findById(id); 
            if(lesson){ 
                return lesson; 
            } else {
                throw new Error('Lesson not found'); 
            }
        } catch(err){
            throw new Error(err); 
        }
    }
    },
    Mutation: {
        createLesson: async (_, {
            newLesson: {
                lessonName, lessonType, lessonDescription, lessonVidLink}}, context) => {
            const user = checkAuth(context); 
            console.log(lessonName + " "+ lessonType +" " +lessonDescription +" " + lessonVidLink); 
            const {valid, errors} = validateNewLesson(lessonName, lessonType, lessonDescription, lessonVidLink); 

            if(!valid){
                throw new Error('User Errors', {errors}); 
            }

            const newLesson = new Lesson({
                lessonName, 
                lessonType, 
                lessonVidLink, 
                lessonDescription, 
                createdBy: user.username, 
                createdAt: new Date().toISOString()
            }); 

            const lesson = await newLesson.save(); 
            context.pubsub.publish("NEW_LESSON", {
                lesson: lesson
            }); 
            return lesson; 
        }, 

        likeLesson : async (_, {lessonId}, context) => {
            const {username} = checkAuth(context); 

            const lesson = await Lesson.findById(lessonId); 
            if(lesson){
                if(lesson.likes.find(l => l.username === username)){
                    lesson.likes = lesson.likes.filter(l => l.username !== username); 
                } else {
                    lesson.likes.push({
                        username, 
                        likedAt: new Date().toISOString()
                    })
                }
                await lesson.save(); 
                return lesson; 
            } else throw new UserInputError("Lesson not found")
        }
    }, 
    Subscription : {
        newLesson: {
            subscribe : (_, __, {pubsub}) => {
                pubsub.asyncIterator("NEW_LESSON"); 
            }
        }
    }
}