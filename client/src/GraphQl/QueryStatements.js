import {gql} from '@apollo/client'; 

const QueryStatements = {
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


export default QueryStatements; 


