const express = require('express');
const router = express.Router();
const {getApod} = require('../controllers/nasa/apod.controller.js')

/* NASA endpoints */
router.get('/apod', getApod);


module.exports = router;
