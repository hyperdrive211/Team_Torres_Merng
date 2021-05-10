import React, {useContext} from 'react'; 
import Queries from '../GraphQl/Queries'; 
import {useQuery} from '@apollo/client'; 
import AuthContext from '../context/auth'; 
import {Grid} from 'semantic-ui-react'; 
import YouTubeEmbed from '../components/YouTubeEmbed'; 
 

const Lesson = (props) => {
    const lessonId = props.match.params.lessonId; 
    const {data: {getLesson}} = useQuery(Queries.GET_LESSON_BY_ID, {
        variables: {
            lessonId
        }
    }); 

    let lessonMarkUp; 

    if(!lessonMarkUp){
        lessonMarkUp = <h5>Getting Lesson Data...</h5>; 
    } else {
        <Grid></Grid>>
    }
    console.log(lessonId)
    return (<div>Lesson Content would be expected to go here </div>); 
}

export default Lesson; 