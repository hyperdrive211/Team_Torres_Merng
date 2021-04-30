import React, {useContext} from 'react'; 
import {Form, Button} from 'semantic-ui-react'; 

import {useForm} from '../util/hooks'; 

function LessonForm(){
    const {onSubmit, onChange, values} = useForm(); 
    const options = [
     {key: 'bjj', text: 'BJJ', value: 'bjj'}, 
     {key: 'judo', text: 'Judo', value: 'judo'}, 
     {key: 'mt', text: 'Muay Thai', value: 'muaythai'}, 
     {key: 'box', text: 'Boxing', value: 'boxing'}, 
     {key: 'wrestling', text:'Wrestling', value: 'wrestling' }, 
     {key: 'mma', text: 'MMA', value:'mma'},
    ]
        
    
    return (
        <div className='form-container'>
      <Form onSubmit={onSubmit}>
          <h2>Lesson Creation</h2>
          <Form.Field>
              <Form.Input
              label='Lesson Name'
              placeholder='Lesson name...'
              onChange={onChange}
              name = 'Lesson Name'
              value = {values.lessonName}
              >
              </Form.Input>
              <Form.Dropdown
              label='Lesson Type'
              placeholder='Lesson type...'
              fluid
              selection
              options = {options}
              >
              </Form.Dropdown>
              <Form.TextArea
              label='Lesson Description'
              placeholder = 'Lesson description'
              >
              </Form.TextArea>
              <Form.Input type='file' 
              label='Content Image'
              placeholder='Content Image...'
              ></Form.Input>
              <Form.Input
              label='Youtube URL'
              placeholder='YouTube url...'
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
