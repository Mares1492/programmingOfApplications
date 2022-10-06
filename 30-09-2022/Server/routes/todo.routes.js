const express = require('express')
const router = express.Router()
const todoController = require("../controllers/todo.controller")

router.get('/', todoController.read)
router.post('/create', todoController.create)
router.put('/changetitle', todoController.changeTitle)
router.put('/changedate', todoController.changeDate)
router.delete('/delete', todoController.delete)

module.exports = router



