// const compare =(productsToSort)=> {
    // return (req, res, next) => {
    //     const path = req.path.split("/")
    //     console.log(path.length - 1)
    // let sorted_products = []
    // if(path[path.length - 1] == 'aes'){
    //     sorted_products = productsToSort.sort((a,b)=> {
    //         return parseInt(a.price) - parseInt(b.price);
    //       });
    // } else if (path[path.length - 1] == 'des'){
    //     sorted_products = productsToSort.sort((a,b)=> {
    //         return parseInt(b.price) - parseInt(a.price);
    //      });
    // }
    // req.data = sorted_products
    // next()
    // }
// }

const compare =(order, productsToSort)=> {
    let sorted_products = []
    if(order.includes('aes')){
        sorted_products = productsToSort.sort((a,b)=> {
            return parseInt(a.price) - parseInt(b.price);
          });
    } else if (order.includes('des')){
        sorted_products = productsToSort.sort((a,b)=> {
            return parseInt(b.price) - parseInt(a.price);
         });
    }

    return sorted_products
}

module.exports = {compare}