const{ gql} = require('apollo-server'); 

module.exports = gql`
type Lesson {
    id: ID!
    lessonName: String!
    lessonType: String!
    lessonVidLink: String! 
}   
type Instructor{
    id: ID!
    username: String!
    token: String!
    fullName: String!
}
type Member{
    id: ID! 
    username: String!
    fullName: String!
    token: String! 
}
type Class{
   if: ID!
   className: String!
   classDate: String!
   classType: String!
   classLevel: String! 
}
type Query{
    getLessons: [Lesson]
}
`; 