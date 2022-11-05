const { create, getUsers, getUserByID, updateUser, deleteUser } = require('./user.service');

module.exports = {
    createUser: (req, resp) => {
        const body = req.body;
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
}