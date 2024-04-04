const {createUser, login, removeUser, getUser} = require('../service/userService')

const register = async(requset, response)=>{
    try {
        const res = await createUser(requset.body);
        response.status(200).json({res});
    } catch (error) {
        response.status(500).json(error.message);
    }
};

const loginUser = async(request, response)=>{
    return await login(request.body)
    .then((res) => response.status(200).json({res}))
    .catch((error)=> response.status(400).json(error.message))
}

const deleteUser = async(req, res)=>{
    try{
        const response = await removeUser(req.body);
        res.status(200).json({response});
    }catch(error){
        res.status(400).json(error.message);
    }
}

const getUserByEmail = async(request, response)=>{
    return await getUser(request.body)
    .then((res) => response.status(200).json({res}))
    .catch((error) => response.status(400).json(error.message))
}

module.exports = {register, loginUser, deleteUser, getUserByEmail};
