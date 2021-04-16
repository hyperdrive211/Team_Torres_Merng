const User = require('../../models/User'); 
const Member = require('../../models/Member'); 
const Instructor = require('../../models/Instructor'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require('../../config');
const {UserInputError} = require('apollo-server'); 
const {validateUserRegistration} = require('../../Util/validators'); 

module.exports = {
    Mutation: {
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
             const token =  jwt.sign({
                 id: res.id, 
                 email: res.email, 
                 username: res.username
             }, SECRET_KEY, {expiresIn: '1h'}); 

             return {
                 ...res._doc, 
                 id: res.id, 
                 token: token
             }
        }
    }
}