import React, {useState, useContext} from 'react'; 
import {Form, Button} from 'semantic-ui-react'; 
import {useForm} from '../util/hooks';
import {useMutation} from '@apollo/client'
import Mutations from '../GraphQl/Mutations'; 
import {AuthContext} from '../context/auth'; 


function  Login(props){
const context = useContext(AuthContext); 
const [errors, setErrors] =  useState({}); 

const {onChange, onSubmit, values} = useForm(loginUserCallback, {
    username: '', 
    password: ''
})

const [loginUser, {loading}] = useMutation(Mutations.LOGIN, {
    update(_, {data:{login:userData}}){
        context.login(userData)
        props.history.push('/'); 
    },
    onError(err){
        console.log(err);
        console.log(err.graphQLErrors[0].extensions.exception.errors); 
        setErrors(err.graphQLErrors[0].extensions.exception.errors); 
    }, 
    variables: {
        username: values.username,
        password: values.password
    }
})

function loginUserCallback(){
    loginUser(); 
}

return (
    <div className='form-container'>
        <Form onSubmit = {onSubmit}>
          <h1>Login</h1>
          <Form.Input 
          label='Username'
          placeholder='username...'
          error={errors.username ? true : false}
          value = {values.username}
          onChange = {onChange}
          name='username'
          type='text'
          >
          </Form.Input>
          <Form.Input
          label='Password'
          placeholder='password...'
          error={errors.password ? true : false}
          value = {values.password}
          name='password'
          type='password'
          onChange={onChange}
          >
               </Form.Input>
         <Button type='submit'>
             Login
         </Button>
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

export default Login; 