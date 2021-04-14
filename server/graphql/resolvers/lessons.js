const Lesson  = require('../../models/lesson'); 

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
    }
}