const User = require('../../models/User'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../../config');
const {UserInputError} = require('apollo-server'); 
const {validateUserRegistration, validateUserLogin} = require('../../Util/validators'); 

generateToken = (user) => {
     return jwt.sign({
         id: user.id, 
         email: user.email, 
         username: user.username
     }, SECRET_KEY, {expiresIn: '3h'});    
}

getUserInfoByType = () => {

}

module.exports = {
    Mutation: {
           login : async (_, {username, password}) => {
           const {errors, valid} = validateUserLogin(username, password); 
           
           if(!valid){
              throw new UserInputError("Errors", {errors}); 
           }
           const user = await User.findOne({username}); 

           if(!user){
               errors.general = 'User not found'; 
               throw new UserInputError('User not found', {errors}); 
           }
           const match = await bcrypt.compare(password, user.password); 
           if(!match){
               errors.general = "Wrong credentials"; 
               throw new UserIinputError("Wrong credentials", {errors}); 
           }
           
           const token = generateToken(user); 

           return {
               ...user._doc, 
               id: user._id,
               token
           }
       }, 
       async register(_, 
        {
            registerUser: { username, email, password, confirmPassword, userType}
        }, 
        ){
            //validate data with server validation 
            const {valid, errors} = validateUserRegistration(username, email, password, confirmPassword); 
            if(!valid){
                throw new UserInputError('Errors', {errors}); 
            }
            //usernames are unique
            const user = await User.findOne({username}); 
            if(user){
                throw new UserInputError('Username is already taken', {
                    errors: {
                        username: 'This username is taken'
                    }
                }) 
            }
            //hash password before password storaged
            password = await bcrypt.hash(password, 12); 
            const newUser = new User({
                email, username, password, userType, createdAt: new Date().toISOString()
            })

            const res = await newUser.save(); 
            //generate the auth token 
             const token =  generateToken(res); 

             return {
                 ...res._doc, 
                 id: res.id, 
                 token: token
             }
        }
    }
}