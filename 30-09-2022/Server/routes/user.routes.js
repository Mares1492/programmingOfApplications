const express = require('express')
const router = express.Router()
const userController = require("../controllers/user.controller")
const altUserController = require("../controllers/user-controller")
const {getTime} = require("../middlewares/getTime");
const {body} = require("express-validator");
const {authMiddleware} = require("../middlewares/auth.middleware");
router.use(getTime)

//new user controller ↓
router.post('/register',
    body('email').isEmail(),
    body('password').isLength({min:6}),
    altUserController.registration)

router.get('/activate/:link',altUserController.activate)
router.post('/login',altUserController.login)
router.post('/logout',altUserController.logout)
router.get('/refresh',altUserController.refresh)
router.get('/users',authMiddleware,altUserController.getAllUsers)

//old user controller ↓
router.post('/create', userController.create)
router.get('/all',userController.read)
//router.get('/login', userController.connect)
//router.get('/logout', userController.disconnect)
router.delete('/delete', userController.delete)

module.exports = router