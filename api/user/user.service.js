const conn = require('../../config/database');
module.exports = {
    create: (data, callback) => {
        conn.query(
            `insert into users (fisrtname, lastname, email, password, mobile) 
                    values(?,?,?,?,?)`,
            [
                data.firstname,
                data.lastname,
                data.email,
                data.password,
                data.mobile
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },
    getUsers: callback => {
        conn.query(
            `select id, fisrtname, lastname, email, mobile from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },
    getUserByID: (id, callback) => {
        conn.query(
            `select id, fisrtname, lastname, email, mobile from users where id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results[0]);
            }
        );
    },
    updateUser: (data, callback) => {
        conn.query(
            `update users set fisrtname=?, lastname=?, email=?, password=?, mobile=? where id=? `,
            [
                data.firstname,
                data.lastname,
                data.email,
                data.password,
                data.mobile,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },

    deleteUser: (data, callback) => {
        conn.query(
            `delete from users where id=?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results);
            }
        );
    },

    getUserByUserEmail: (email, callback) => {
        conn.query(
            `select * from users where email=?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                // below return success  
                return callback(null, results[0]);
            }
        );
    }
}