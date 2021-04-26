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
    likeCount: Int!
    commentCount: Int!
} 


type Comment{
  id: ID!
  content: String!
  createdAt: String!
  username: String!
}

type Like{
    id: ID!
    username: String! 
    likedAt: String!
}

type User {
    id: ID!
    username: String!
    token: String!
    userType: String
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
    createComment(lessonId: String! content:String!):Lesson!
    deleteComment(lessonId: String! commentId: String!):Lesson!
    likeLesson(lessonId:ID!): Lesson! 
}

type Subscription{
    newLesson: Lesson!
}
`; 