const cheerio = require('cheerio')
const fetch = require('node-fetch')


const getTweet = async () => {
    const URL = 'https://twitter.com/bertinosborne';
    const response = await fetch(URL);
    const body = await response.text();
    const $ = cheerio.load(body)
    const tweet = $('.js-tweet-text-container').first()
    const image = $('.AdaptiveMedia-photoContainer').attr('data-image-url')
    
    return {
        text: tweet.text(),
        img: image ? image : ""
    }
}

module.exports = getTweet;