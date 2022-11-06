const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, resp, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, 'qwerty123', (err, decoded) => {
                if (err) {
                    resp.json({
                        success: 0,
                        message: "Invalid Token"
                    });
                } else {
                    next();
                }
            });
        } else {
            resp.json({
                success: 0,
                message: "Access Denied! Unauthorozed user."
            });
        }
    }
}