const axios = require('axios'); 
const cheerio = require('cheerio');

axios.get('https://scrapeme.live/shop/') 
	 .then(({ data }) => {
        const $ = cheerio.load(data);
    
        const pokemonNames = $('.woocommerce-loop-product__title')
            .map((_, product) => {
                const $product = $(product); 
                return $product.text()
            })
            .toArray();
        console.log(pokemonNames)
     });