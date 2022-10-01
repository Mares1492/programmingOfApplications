const express = require('express')
const router = express.Router()
const catsController = require("../controllers/cats.controller")
const {checkUser} = require("../middlewares/checkUser");
module.exports = router

router.use(checkUser)

const getMiddleware = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
}


router.get('/', getMiddleware,catsController.cats_list);
router.post('/:name', catsController.add_cat)
router.put('/feed-:name',catsController.feed_cat)
router.put('/feed',catsController.feed_all_cats)
router.delete('/:name',catsController.delete_cat_from_list)
router.get('/about', (req, res) => {
    res.send('About cats')
})
