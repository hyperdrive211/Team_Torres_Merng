import {gql} from '@apollo/client'; 

const Queries = {
    FETCH_LESSONS : gql`
   query{
  getLessons{
    id
    createdAt
    lessonName
    lessonType
    lessonVidLink
    createdBy
    commentCount
    likeCount
    comments{
      id
      content
      username
    }
    likes {
      username
    }
  }
}`, 
   GET_LESSON_BY_ID: gql`
   query($id: String!){
    getLesson(id: $id){
    id
    lessonName
    lessonVidLink
    lessonDescription
    lessonType
    createdBy
    createdAt
  }
   }
   `, 
   GET_LESSON_BY_TYPE: gql`
      query($type: String!){
        getLessonByType(type: $type){
          id
          lessonName
          lessonVidLink
          lessonDescription
          createdBy
          createdAt
        }
      }
   `, 
   GET_LESSON_BY_TUTOR: gql`
      query($tutor: String!){
        getLessonByTutor(tutor: $tutor){
          id
          lessonName
          lessonVidLink
          lessonDescription
          createdBy
          createdAt
        }
      }
   `, 
}


export default Queries; 





