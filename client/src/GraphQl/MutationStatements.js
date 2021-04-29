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
}

export default Mutations; 