const express = require('express')
const router = express.Router()
const dogsController = require("../controllers/dogs.controller")
const {checkUser} = require("../middlewares/checkUser");

router.use(checkUser)

const getMiddleware = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}


router.get('/', getMiddleware, dogsController.read)
router.get('/:name', dogsController.findDog)
router.post('/:name', dogsController.create)
router.put('/:name', dogsController.update)
router.delete('/:name', dogsController.delete)

module.exports = router