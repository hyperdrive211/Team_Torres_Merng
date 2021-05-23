import React, {useContext} from 'react'; 
import Queries from '../GraphQl/Queries'; 
import {useQuery} from '@apollo/client'; 
import {AuthContext} from '../context/auth'; 
import {Grid, Button, Container, Card} from 'semantic-ui-react'; 
import YouTubeEmbed from '../components/YouTubeEmbed'; 
import moment from 'moment'; 
 

const Lesson = (props) => {
    const lessonId = props.match.params.lessonId; 
    console.log(lessonId);
    const {data} = useQuery(Queries.GET_LESSON_BY_ID, {
        variables: {
            id: lessonId
        }
    }); 
    
    const {user} = useContext(AuthContext); 
    let lessonData = {}; 

     if(data){
         console.log(data.getLesson); 
        const {lessonName, lessonVidLink, lessonDescription, lessonType} = data.getLesson; 
        console.log(lessonType); 
        lessonData.lessonName = lessonName; 
        lessonData.lessonVidLink = lessonVidLink; 
    }

    const lessonMarkup = data ? (
        <Container>
            <div className="lessonCard">
                <h3>{data.getLesson.lessonName}</h3>
                <h5>{data.getLesson.lessonType}</h5>
                <YouTubeEmbed lessonData= {lessonData} />
                <h4>Lesson Description</h4>
                <p>
                    {data.getLesson.lessonDescription}
                </p>
            </div>
        </Container>
    ) : (
        <Container>
        <h1>Content Loading</h1>
        </Container>
    ); 
    return  lessonMarkup; 
       
}

export default Lesson; 