const  lessonsResolvers = require('./lessons');
const usersResolvers = require('./user');  
const commentsResolvers = require('./comments');


module.exports = {
    Lesson: {
      likeCount: (parent) => parent.likes.length, 
      commentCount: (parent) => parent.comments.length

    
    }, 
    Query: {
        ...lessonsResolvers.Query,
    }, 
    Mutation: {
       ...usersResolvers.Mutation,
       ...lessonsResolvers.Mutation,
       ...commentsResolvers.Mutation
    },
    Subscription: {
        ...lessonsResolvers.Subscription
    }
}