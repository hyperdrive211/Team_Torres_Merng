const  lessonsResolvers = require('./lessons');
const usersResolvers = require('./user');  


module.exports = {
    Query: {
        ...lessonsResolvers.Query,
    }, 
    Mutation: {
       ...usersResolvers.Mutation,
       ...lessonsResolvers.Mutation,
    }
}