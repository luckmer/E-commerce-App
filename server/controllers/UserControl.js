const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

let maxAge = 3 * 24 * 60 * 60;
let SECRET = process.env.SECRET;
let SALT = process.env.SALT;

exports.RegisterCreateAccount = async (req, res, next) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        RegisterValidationCheck(email, password, name, res, confirmPassword);

        if (validateEmail(email)) {
            await bcrypt.hash(password, SALT, (error, hash) => {
                User.create({
                    email: email,
                    name: name,
                    password: hash,
                })
                    .then(() =>
                        res.json({
                            status: "succes",
                            title: "account created",
                        })
                    )
                    .catch((error) => {
                        return res.status(401).json({ title: error });
                    });
            });
        }
    } catch (err) {
        return res.status(500).json({ title: err.message });
    }
};

const RegisterValidationCheck = (
    email,
    password,
    name,
    res,
    confirmPassword
) => {
    if (!email || !password || !name) {
        return res.status(401).json({
            status: "error",
            title: "please fill in all fields",
        });
    }

    if (password !== confirmPassword) {
        return res.status(401).json({
            status: "error",
            title: "passwords are not the same ",
        });
    }

    if (!validateEmail(email)) {
        return res.status(401).json({
            status: "error",
            title: "ncorrect email",
        });
    }

    if (!validatePassword(password)) {
        return res.status(500).json({
            status: "error",
            title:
                "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
        });
    }
};

exports.LoginAccount = (req, res, next) => {
    try {
        const { password, email } = req.body;
        User.findOne({ email }).then((user) => {
            LoginValidationCheck(user, res, password, email);
            const token = createToken(user._id);
            bcrypt.compare(
                req.body.password,
                user.password,
                function (err, results) {
                    if (results) {
                        res.cookie("jwt", token, {
                            httpOnly: true,
                            maxAge: maxAge * 1000,
                        });
                        return res.json({
                            title: "Login success",
                            connected: true,
                        });
                    } else {
                        return res
                            .status(500)
                            .json({ title: "Invalid credencial" });
                    }
                }
            );
        });
    } catch (err) {
        return res.status(500).json({ title: err });
    }
};

const LoginValidationCheck = (user, res, password, email) => {
    if (!user) {
        return res.status(400).json({
            status: "error",
            title: "user not exist.",
        });
    }

    if (!password || !email) {
        return res.status(400).json({
            status: "error",
            title: "incorrect data",
        });
    }
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.json({ title: "Logged out." });
    } catch (err) {
        return res.status(500).json({ title: err.message });
    }
};

exports.PasswordChange = async (req, res, next) => {
    try {
        const { password, email } = req.body;
        const passwordHash = await bcrypt.hash(password, 12);

        PasswordChangeValidationCheck(email, res, password);

        await User.findOneAndUpdate(email, {
            password: passwordHash,
        });
        return res.json({ title: "updated" });
    } catch (err) {
        return res.status(500).json({ title: err.message });
    }
};

const PasswordChangeValidationCheck = (email, res, password) => {
    if (!validateEmail(email)) {
        return res.json({ title: "set email" }).status(401);
    }

    if (!validatePassword(password)) {
        return res
            .json({
                title:
                    "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
            })
            .status(401);
    }
};

exports.Token = async (req, res, next) => {
    try {
        let token = req.cookies.jwt;
        if (token) {
            jwt.verify(token, SECRET, (err, user) => {
                if (!user) res.json({ title: "login/register " });
                let result = createToken(user._id);
                return res.json({ result });
            });
        }
    } catch (err) {
        return res
            .status(500)
            .json({ title: "something went wrong try later" });
    }
};

exports.UserData = async (req, res, next) => {
    try {
        const cookie = req.cookies.jwt;
        if (cookie) {
            const decoded = jwt_decode(cookie).id;
            const user = await User.findById(decoded);
            return res.json({ user });
        }
    } catch (err) {
        return res.status(500).json({ title: "incorrect data try later" });
    }
};

exports.userCart = async (req, res, next) => {
    try {
        const cookie = req.cookies.jwt;
        if (cookie) {
            const id = jwt_decode(cookie).id;
            console.log(req.body);
            await User.findByIdAndUpdate(id, {
                cart: req.body,
            });
        }
    } catch (err) {
        return res.status(500).json({ title: err.message });
    }
};

exports.DeleteOneUserCart = (req, res, next) => {
    try {
    } catch (err) {
        return res.status(500).json({
            title: "something went wrong DeleteOneUserCart",
            error: err.message,
        });
    }
};

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validatePassword = (password) => {
    const re = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
};

const createToken = (id) => {
    return jwt.sign({ id }, SECRET, {
        expiresIn: maxAge,
    });
};
