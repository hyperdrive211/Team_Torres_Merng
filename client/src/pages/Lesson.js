import React, {useContext} from 'react'; 
import Queries from '../GraphQl/Queries'; 
import {useMutation} from '@apollo/client'; 
import AuthContext from '../context/auth'; 
 

const Lesson = (props) => {
    const lessonId = props.match.params.lessonId; 
    
    console.log(lessonId)
    return (<div>Lesson Content would be expected to go here </div>); 
}

export default Lesson; 