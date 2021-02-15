const express = require("express");
const router = express.Router();
const adminAuth = require("../controllers/verifyAdmin");
const auth = require("../controllers/verifyToken");

const {
    ViewProduct,
    CreateProduct,
    UpdatePropduct,
    DeleteProduct,
} = require("../controllers/ProductAdminCreate");

router.get("/product", ViewProduct);
router.post("/create", adminAuth, CreateProduct);
router.patch("/update/:id", adminAuth, UpdatePropduct);
router.delete("/delete/:id", adminAuth, DeleteProduct);

const {
    RegisterCreateAccount,
    LoginAccount,
    PasswordChange,
    logout,
    Token,
    UserData,
    userCart,
    DeleteOneUserCart
} = require("../controllers/UserControl");

router.get("/logout", logout);
router.get("/loggedIn", Token);
router.get("/currentUser", auth, UserData);
router.patch("/cart", userCart);
router.delete("/oneCart/:id", DeleteOneUserCart);

router.post("/register", RegisterCreateAccount);
router.post("/login", LoginAccount);
router.post("/forgot_password", PasswordChange);

module.exports = router;
