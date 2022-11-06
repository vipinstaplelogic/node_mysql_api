const {
    createUser,
    getUserList,
    getUserByUserID,
    updateUserData,
    deleteUserData,
    loginByEmail
} = require('./user.controller');
const router = require('express').Router();

const { checkToken } = require('../../auth/token_validation');

router.post('/login', loginByEmail);
router.post('/', checkToken, createUser);
router.get('/list', checkToken, getUserList);
router.get('/detail/:id', checkToken, getUserByUserID);
router.patch('/update', checkToken, updateUserData);
router.delete('/delete', checkToken, deleteUserData);

module.exports = router;