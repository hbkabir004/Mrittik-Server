const products = require('../data/products.json')

function compareFunc(req, res, next) {
    const path = req.path.split("/")
    let sorted_products = []
    if(path[2] === 'aes'){
        sorted_products = products.sort((a,b)=> {
            return parseInt(a.price) - parseInt(b.price);
          });
    } else if (path[2] === 'des'){
        sorted_products = products.sort((a,b)=> {
            return parseInt(b.price) - parseInt(a.price);
         });
    }
    req.data = sorted_products
    next()
}

module.exports = compareFunc