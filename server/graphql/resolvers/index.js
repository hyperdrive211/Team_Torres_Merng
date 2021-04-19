const  lessonsResolvers = require('./lessons');
const usersResolvers = require('./user');  
const commentsResolvers = require('./comments');


module.exports = {
    Query: {
        ...lessonsResolvers.Query,
    }, 
    Mutation: {
       ...usersResolvers.Mutation,
       ...lessonsResolvers.Mutation,
       ...commentsResolvers.Mutation
    }
}