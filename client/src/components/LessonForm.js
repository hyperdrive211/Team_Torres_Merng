import React, {useContext, useState} from 'react'; 
import {useMutation} from '@apollo/client'; 
import {Form, Button, Dropdown} from 'semantic-ui-react'; 
import {AuthContext} from '../context/auth';
import Mutations from '../GraphQl/Mutations'; 

import {useForm} from '../util/hooks'; 

function LessonForm(props){
    const user = useContext(AuthContext); 
    const [errors, setErrors] = useState({}); 
    const {onSubmit, onChange, values} = useForm(addNewLesson, {
        lessonName: '',
        lessonType: '', 
        lessonDescription: '', 
        lessonVidLink: ''
    }); 

    const [addLesson, {loading}] = useMutation(Mutations.ADD_LESSON, {
        update(_, __){
            console.log(__); 
            props.history.push('/content'); 
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors); 
            console.log("Errors: " + errors); 
            
        }, 
        variables:{
              lessonName: values.lessonName, 
              lessonType: values.lessonType, 
              lessonDescription: values.lessonDescription, 
              lessonVidLink: values.lessonVidLink
        }
    }); 
    const options = [
     {key: 'bjj', text: 'BJJ', value: 'bjj'}, 
     {key: 'judo', text: 'Judo', value: 'judo'}, 
     {key: 'mt', text: 'Muay Thai', value: 'muaythai'}, 
     {key: 'box', text: 'Boxing', value: 'boxing'}, 
     {key: 'wrestling', text:'Wrestling', value: 'wrestling' }, 
     {key: 'mma', text: 'MMA', value:'mma'},
    ]

    function addNewLesson(){
        addLesson(); 
    }
        
    function somethingHappen(e){
        values.lessonType = e.target.innerText; 
    }
    return (
        <div className='form-container'>
      <Form onSubmit={onSubmit}>
          <h2>Lesson Creation</h2>
          <Form.Field>
              <Form.Input
              label='Lesson Name'
              placeholder='Lesson name...'
              onChange={onChange}
              name = 'lessonName'
              value = {values.lessonName}
              >
              </Form.Input>
              <Form.Dropdown
              label='Lesson Type'
              placeholder='Lesson type...'
              fluid
              selection
              options = {options}
              id='lessonType'
              onChange={somethingHappen}
              >
              </Form.Dropdown>
              <Form.TextArea
              label='Lesson Description'
              placeholder = 'Lesson description'
              name = 'lessonDescription'
              onChange={onChange}
              value={values.lessonDescription}
              >
              </Form.TextArea>
              <Form.Input
              label='Youtube URL'
              placeholder='YouTube url...'
              name = 'lessonVidLink'
              value = {values.lessonVidLink}
              onChange={onChange}
              >
              </Form.Input>
              <Button type='submit' primary>
                  Submit
              </Button>
          </Form.Field>
      </Form>
      {Object.keys(errors).length > 0 && (
            <div className='ui error message'>
                <ul className='list'>
                  {Object.values(errors).map((value) => (
                      <li key={value}>{value}</li>
                  ))}  
                </ul>
            </div>
         )}
      </div>
    ); 
}


export default LessonForm; 
