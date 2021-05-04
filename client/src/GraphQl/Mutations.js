import {gql} from '@apollo/client'; 

const Mutations = {
    REGISTER :  gql`
    mutation
        RegisterUser(
            $username:String!
            $email:String!
            $password:String!
            $confirmPassword: String!
            $userType: String
        ){
        register(registerUser:{
                    username: $username email: $email
                    password: $password confirmPassword: $confirmPassword userType: $userType
        }){
            id
            token
            username
            userType    
        }
             }
            `, 
    LOGIN: gql`
        mutation 
        login($username: String! $password: String!)
            {
                login(username: $username password:$password){
                     id
                     username
                     userType
                     token
                     }
            }
            `,  
    ADD_LESSON: gql`
        mutation createLesson($lessonName: String! $lessonType: String! $lessonDescription: String! $lessonVidLink: String!){
            createLesson(lessonName: $lessonName lessonType: $lessonType lessonDescription: $lessonDescription lessonVidLink: $lessonVidLink){
                id
                username
                lessonName
                lessonDescription
                lessonVidLink
            }
        }
    `, 
}

export default Mutations; 
 