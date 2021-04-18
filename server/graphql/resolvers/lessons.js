const Lesson  = require('../../models/Lesson'); 

module.exports = {
    Query: {
        getLessons: async () => {
            try{
            const lessons = await Lesson.find(); 
            return lessons; 
            } catch(err) {
                throw new Error(err)
            }
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
}