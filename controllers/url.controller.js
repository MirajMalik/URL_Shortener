const URL = require('../models/url.model')
const shortid = require('shortid')

async function handleShortUrl(req,res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({
            error : "url is required"
        });
    }

    const shortId = shortid();

    await URL.create({
        shortId : shortId,
        redirectUrl : body.url
    });

    return res.json({id : shortId});
}


async function handleAnalysis(req,res) {
   const shortId = req.params.shortId;
   const result = await URL.findOne({shortId});
   return res.json({
    totalClicks : result.visitHistory.length,
    analysis : result.visitHistory,
   });
}

module.exports = {handleShortUrl,handleAnalysis};