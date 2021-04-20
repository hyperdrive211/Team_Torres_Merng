const Lesson  = require('../../models/Lesson'); 
const checkAuth = require('../../Util/auth');
const {UserInputError} = require('apollo-server');  

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
    getLesson: async (_, {lessonId}) => {
        try {
            const lesson = await Lesson.findById(lessonId); 
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
        createLesson: async (_, {lessonName, lessonType, lessonDescription, lessonVidLink}, context) => {
            const user = checkAuth(context); 
            const newLesson = new Lesson({
                lessonName, 
                lessonType, 
                lessonVidLink, 
                lessonDescription, 
                createdBy: user.username, 
                createdAt: new Date().toISOString()
            }); 

            const lesson = await newLesson.save(); 
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
    }
}