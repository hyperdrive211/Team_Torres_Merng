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
    createdBy
    createdAt
  }
   }
   `
}


export default Queries; 





