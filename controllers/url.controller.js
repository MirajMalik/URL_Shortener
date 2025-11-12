const URL = require('../models/url.model')
const shortid = require('shortid')
async function handleShortUrl(req,res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({
            error : "url is required"
        });
    }

    const shortId = nanoid();
    await URL.createObjectURL({
        shortId : shortid,
        redirectURL : body.url
    });

    return res.json({id : shortId});
}

module.exports = {handleShortUrl};