import React, {useContext} from 'react'; 
import Queries from '../GraphQl/Queries'; 
import {useQuery} from '@apollo/client'; 
import {AuthContext} from '../context/auth'; 
import {Grid, Button} from 'semantic-ui-react'; 
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

    let lessonMarkUp; 
    let lessonData = {}; 

     if(!data){
        lessonMarkUp = (<h5>Getting Lesson Data...</h5>); 
    } else {
        lessonData.lessonName = data.getLesson.lessonName; 
        lessonData.lessonVidLink = data.getLesson.lessonVidLink; 

        lessonMarkUp = 
       (<Grid>
            <Grid.Row>
                <YouTubeEmbed props={lessonData} /> 
            </Grid.Row>
            <Grid.Row>
              <h3>
                  {data.getLesson.lessonName}
              </h3>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={6}>
                  
                </Grid.Column>
                <Grid.Column width={6}>
                    <span>Uploaded</span>
                </Grid.Column>
                <Grid.Column width={4}>  
                
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
    }
    return lessonMarkUp
}

export default Lesson; 