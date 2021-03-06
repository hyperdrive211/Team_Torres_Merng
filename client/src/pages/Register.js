import React, {useState, useContext} from 'react'; 
import {Form, Button} from 'semantic-ui-react'; 
import { useMutation} from '@apollo/client'; 
import {useForm} from '../util/hooks'; 
import Mutations from '../GraphQl/Mutations'; 
import {AuthContext} from '../context/auth'; 

function Register(props){
    const context = useContext(AuthContext); 
    const [errors, setErrors] = useState({}); 

    const {onChange, onSubmit, values} = useForm(registerUser, {
        username: '',
        email: '', 
        password: '', 
        confirmPassword: '' 
    })
    
    
    const [addUser, {loading}] = useMutation(Mutations.REGISTER, {
        update(_, {data: {register: userData}}){
            context.login(userData); 
            props.history.push('/'); 
        }, 
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables : {
            username: values.username, 
            password: values.password, 
            confirmPassword: values.confirmPassword, 
            email: values.email, 
            userType: 'member'
        },
    }); 

    function registerUser(){
        addUser(); 
    }


    return (
        <div className='form-container'>
        <Form onSubmit={onSubmit}>
            <h1>
                Register
            </h1>
            <Form.Input label="Username" 
            placeholder="Username..."
            name="username"
            value={values.username}
            onChange = {onChange}
            error={errors.username ? true : false}
            >
            </Form.Input>
            <Form.Input label='Email'
            placeholder='Email...'
            name = 'email'
            value={values.email}
            onChange ={onChange}
            type= 'email'
            error={errors.email ? true : false}
            >
            </Form.Input>
            <Form.Input label='Password'
            type='password'
            name = 'password'
            value={values.password}
            placeholder= 'Password...'
            onChange = {onChange}
            error={errors.password ? true : false}
            >
            </Form.Input>
            <Form.Input label='ConfirmPassword'
            type = 'password'
            name = 'confirmPassword'
            value={values.confirmPassword}
            placeholder = 'Confirm Password...'
            onChange = {onChange}
            error = {errors ? true : false}
            >
            </Form.Input> 
            <Button type="submit" primary
            >Register</Button>  
        </Form>
       {Object.keys(errors).length > 0 && (
           <div className="ui error message">
                <ul className="list">
                  {Object.values(errors).map((value, index) => (
                    <li key={index}>{value}</li> ))}
                </ul>
           </div>
       )}
       </div>
    )
}

export default Register; 