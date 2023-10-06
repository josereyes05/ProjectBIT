const { Router } = require('express')
const logincont = require('../controllers/logincont')

const router = Router()

router.post('/', logincont.loginuser);

module.exports = router;