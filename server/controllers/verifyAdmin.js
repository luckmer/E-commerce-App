const jwt_decode = require("jwt-decode");
const User = require("../models/userModel");

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (token) {
            const decoded = jwt_decode(token).id;
            const user = await User.findById(decoded);
            let role = user.role;

            if (role === 0) {
                res.status(401).json({ title: "access denied" });
            }

            if (role === 1) {
                res.status(200).json({ title: "welcome admin" });
                next();
            }
        }
        if (!token && role !== 1) {
            return res.status(401).json({ title: "access denied" });
        }
    } catch (err) {
        return res.status(500).json({ title: "access denied" });
    }
};
