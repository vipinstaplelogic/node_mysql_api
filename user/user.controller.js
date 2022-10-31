const { create, getUsers } = require('./user.service');

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
    }
}