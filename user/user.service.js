const conn = require('../config/database');
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
                if(error){
                    return callback(error);
                }  
                // below return success  
                return callback(null, results);
            }
        );
    },
    getUsers: callback => {
        conn.query(
            `select fisrtname, lastname, email, mobile from users`, 
            [],
            (error, results, fields) => { 
                if(error){
                    return callback(error);
                }  
                // below return success  
                return callback(null, results);
            }
        );
    }
}