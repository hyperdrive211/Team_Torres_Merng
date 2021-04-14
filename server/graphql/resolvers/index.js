const  lessonsResolvers = require('./lessons'); 


module.exports = {
    Query: {
        ...lessonsResolvers.Query,
    }
}