const puppeteer = require('puppeteer');
const scroll = require('./scroll.js')

const cheezburgerCrawl = async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto('https://cheezburger.com/search#cat/page/1');

    const crawledData = await page.evaluate(async() => {

        var captionArray = Array.from(document.getElementsByTagName('h5'));
        
        let filteredArray = captionArray.filter(item => 
        {
            var caption = item.innerHTML;
            var word = 'Memes';

            var result = caption.includes(word);
            return result;
        });

        var randomCaption = filteredArray[Math.floor(Math.random()*filteredArray.length)];
        var captionLink = randomCaption.parentElement.parentElement.href
        await page.goto(captionLink);
        await page.setViewport({
            width: 1200,
            height: 800
        });
        await scroll.autoScroll(page);

        var imageArray = Array.from(document.getElementsByClassName('resp-media lazyloaded'));
        
        filteredArray = imageArray.filter(item => 
        {
            var imageId = item.id;
            var string = '_r_a_';

            var result = imageId.includes(string);
            return result;
        });

        var randomImage = filteredArray[Math.floor(Math.random()*filteredArray.length)];
        var randomMemeSrc = randomImage.src;
        return randomMemeSrc;
    });

    await browser.close()
    return crawledData
};

module.exports.cheezburgerCrawl = cheezburgerCrawl;