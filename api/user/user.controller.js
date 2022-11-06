const {
    create,
    getUsers,
    getUserByID,
    updateUser,
    deleteUser,
    getUserByUserEmail
} = require('./user.service');

const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require("jsonwebtoken")

module.exports = {
    createUser: (req, resp) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        // call service-method
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not created',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records created successfully',
                data: results
            });
        });
    },
    getUserList: (req, resp) => {
        // call service-method
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Records not found',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records listed successfully',
                data: results
            });
        });
    },

    getUserByUserID: (req, resp) => {
        const user_id = req.params.id;
        // call service-method
        getUserByID(user_id, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Something went wrong',
                });
            }
            if (!results) {
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not found',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records found successfully',
                data: results
            });
        });
    },

    updateUserData: (req, resp) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        // call service-method
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not updated',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records updated successfully',
                data: results
            });
        });
    },
    deleteUserData: (req, resp) => {
        const body = req.body;
        // call service-method
        deleteUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not deleted',
                });
            }
            return resp.status(200).json({
                success: 1,
                message: 'Records deleted successfully',
                data: results
            });
        });
    },

    loginByEmail: (req, resp) => {
        const body = req.body;
        // call service-method
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
                return resp.status(500).json({
                    success: 0,
                    message: 'Record not deleted',
                });
            }
            if (!results) {
                return resp.json({
                    success: 0,
                    message: 'Invalid username or Password',
                });
            }

            const compPassword = compareSync(body.password, results.password);
            if (compPassword) {
                results.password = undefined;
                // password match, now generate json token
                const jsontoken = sign({ result: results }, "qwerty123", { expiresIn: "1h" });
                return resp.status(200).json({
                    success: 1,
                    message: 'Login successfully',
                    token: jsontoken
                });
            } else {
                return resp.json({
                    success: 0,
                    message: 'Invalid username or Password',
                });
            }
        });
    }
}