const express = require('express');
const { handleShortUrl,handleAnalysis } = require('../controllers/url.controller');
const router = express.Router();

router.post('/',handleShortUrl);

router.get('/analysis/:shortId',handleAnalysis);


module.exports = router;