const { createUser, getUserList, getUserByUserID, updateUserData, deleteUserData } = require('./user.controller');
const router = require('express').Router();

router.post('/', createUser);
router.get('/list', getUserList);
router.get('/detail/:id', getUserByUserID);
router.patch('/update', updateUserData);
router.delete('/delete', deleteUserData);

module.exports = router;