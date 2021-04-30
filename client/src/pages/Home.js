import React, {useContext} from 'react';  
import {useQuery} from '@apollo/client';
import {Grid} from 'semantic-ui-react'
import LessonPanel from '../components/LessonPanel'; 
import LessonForm from '../components/LessonForm'; 
import Queries from '../GraphQl/Queries';
import {AuthContext} from '../context/auth'; 

function Home(){
    const {user} = useContext(AuthContext); 
    const {loading, data} = useQuery(Queries.FETCH_LESSONS); 
    return (
        <Grid columns={3}>
         <Grid.Row className = 'page-title'>
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

export default Home; 