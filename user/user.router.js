const { createUser, getUserList } = require('./user.controller');
const router = require('express').Router();

router.post('/', createUser);
router.get('/list', getUserList);

module.exports = router;