let jwt = require("jsonwebtoken");
let SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
    try {
        const token = req.cookies.jwt;
        if (token) {
            const verified = jwt.verify(token, SECRET);
            req.user = verified;
            next();
        }

        if (!token) {
            return res.status(401).json({ title: "invalid data" });
        }
    } catch (err) {
        res.status(500).json({ title: "something went wrong" });
    }
};
