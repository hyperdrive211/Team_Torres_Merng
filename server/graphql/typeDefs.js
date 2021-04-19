const{ gql} = require('apollo-server'); 

module.exports = gql`
type Lesson {
    id: ID!
    lessonName: String!
    lessonType: String!
    lessonVidLink: String!
    createdBy: String!
    createdAt: String!
    comments: [Comment]!
    likes: [Like]!

} 
type Comment{
  id: ID!
  createdBy: String
  body: String!
  createdAt: String!
}

type Like{
    id: ID!
    createdAt: String!
    username: String! 

}
type User {
    id: ID!
    username: String!
    token: String!
    userType: String
}
type Instructor{
    id: ID!
    username: String!
    fullname: String!

}
type Member{
    id: ID! 
    username: String!
    fullName: String!
    joinedAt: String!
    membershipType: String!
    bjjRank: String!

}
type Class{
   id: ID!
   className: String!
   classDate: String!
   classType: String!
   classLevel: String! 
}
input RegisterUser {
    username: String!
    password: String!
    confirmPassword: String!
    email:String!
    userType: String
}
type Query{
    getLessons: [Lesson]
    getLesson(id: String!): Lesson!
}
type Mutation{
    register(registerUser: RegisterUser): User!
    login(username: String!, password: String!):User!
    createLesson(lessonName: String!, lessonType:String!, lessonVidLink:String!):Lesson!
    deleteLesson(lessonId: String): String!
    createComment(lessonId: String!, body:String!):Lesson!
    deleteComment(lessonId: String!):String!
    likeLesson(lessonId:ID!): Lesson! 
}
`; 