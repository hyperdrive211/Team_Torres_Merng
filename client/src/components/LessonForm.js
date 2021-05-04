import React, {useContext} from 'react'; 
import {useMutation} from '@apollo/client'; 
import {Form, Button, Dropdown} from 'semantic-ui-react'; 
import {AuthContext} from '../context/auth';
import Mutations from '../GraphQl/Mutations'; 

import {useForm} from '../util/hooks'; 

function LessonForm(){
    const user = useContext(AuthContext); 

    const {onSubmit, onChange, values} = useForm(addNewLesson, {
        lessonName: '',
        lessonType: '', 
        lessonDescription: '', 
        lessonVidLink: ''
    }); 

    const [addLesson, {loading}] = useMutation(Mutations.ADD_LESSON, {
        update(_, __){
            props.history.push('/content'); 
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        }, 
        variables:{
              lessonName: values.lessonName, 
              lessonType: lessonType, 
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
        console.log(values.lessonType); 
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
              <Dropdown
              label='Lesson Type'
              placeholder='Lesson type...'
              fluid
              selection
              options = {options}
              id='lessonType'
              onChange={somethingHappen}
              >
              </Dropdown>
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
      </div>
    ); 
}


export default LessonForm; 
