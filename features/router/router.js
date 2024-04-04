const express = require('express');
const router = express.Router();
const {register, loginUser, deleteUser, getUserByEmail} = require('../controller/userController');

router.route('/register').post(register);
router.route('/login').post(loginUser);
router.route('/delete').delete(deleteUser);
router.route('/user').get(getUserByEmail)


module.exports = router;
