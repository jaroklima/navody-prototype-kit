const express = require('express')
const router = express.Router()
const zivnostRouter = require('./zalozenie_zivnosti_routes')
const autoRouter = require('./kupa_auta_routes')

// Add your routes here - above the module.exports line
router.use('/zalozenie-zivnosti', zivnostRouter)


router.use('/kupa-auta', autoRouter)
module.exports = router
