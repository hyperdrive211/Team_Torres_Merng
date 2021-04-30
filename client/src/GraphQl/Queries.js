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
}`
}


export default Queries; 





