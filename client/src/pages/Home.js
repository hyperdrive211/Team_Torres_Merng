import React from 'react';  
import {gql, useQuery} from '@apollo/client';
import {Grid} from 'semantic-ui-react'
import LessonPanel from '../components/LessonPanel'; 

function Home(){
    const {loading, data} = useQuery(FETCH_LESSONS_QUERY); 
    console.log(data); 

    return (
        <Grid columns={3}>
         <Grid.Row>
             <h1>Lesson Content</h1>
         </Grid.Row>
         <Grid.Row>
           {
               loading ? (
                   <h1>Loading content</h1>
               ) : (
                  data.getLessons && data.getLessons.map(lesson => (
                            <Grid.Column key={lesson.id}>
                                <LessonPanel lesson={lesson} />
                            </Grid.Column>
                  ))
               )
           }
         </Grid.Row>
        </Grid>
    ); 
}

const FETCH_LESSONS_QUERY = gql`
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
}
`

export default Home; 