const Lesson  = require('../../models/Lesson'); 
const checkAuth = require('../../Util/auth'); 

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
        }
    }
}