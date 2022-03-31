const router = require('express').Router()
const commentCtrl = require('../controllers/commentCtrl')


router.get('/comments/:product_id',commentCtrl.getComments)

module.exports = router