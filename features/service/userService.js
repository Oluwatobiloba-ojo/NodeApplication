const User = require('../model/user');
const NotFoundException = require('../exceptions/NotFoundException');



const createUser = async(request) =>{
    const {firstName, lastName, email, password} = request;

    const user = await User.findOne({email});
    if(user){
        throw new NotFoundException("Email already in user");
    }
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };
    const savedUser = await User.create(newUser);

    const response = {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
    }
    return{
        data: response,
        message: "Registeration Successful"
    }
}

const login = async(request)=>{
    const{email, password} = request;

    const user = await User.findOne({email});
    if(!user){
        throw new NotFoundException("User does not exist");
    };
    if(user.password != password){
        throw new NotFoundException('Invalid login details');
    };
    if(user.password === password){
    return {
        msg: "Login successful"
    }
    }
}

const removeUser = async(request) =>{
    const {email} = request;
    const user = await User.findOne({email});
    if(!user){
        throw new NotFoundException("User does not exist");
    }
    await User.deleteOne({email: user.email})
    .then((result) => console.log(result))

    return {
        message : `User ${email} has been deleted`
    }
}

const getUser = async(request) =>{
    const {email} = request;
    const user = await User.findOne({email})
    if(!user){
        throw new NotFoundException("User does not exist");
    }
    return {
        user : user,
    }
}

module.exports = {createUser, login, removeUser, getUser};
