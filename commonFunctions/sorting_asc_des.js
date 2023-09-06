/**
 * This function take two parameters, first is- order (pathname) which either includes 'aes' or 'des' and another is products array which will be sorting ascending to descending or descending to ascending order
 * And finally this function return sorting values as an array
*/

const sorting_asc_des =(order, products_to_sort)=> {
    let sorted_products = []
        sorted_products = products_to_sort.sort((a, b)=> {
            if(order.includes('aes')){
                return parseInt(a.price) - parseInt(b.price);
            } else if (order.includes('des')){
                return parseInt(b.price) - parseInt(a.price);
            }
    })

    return sorted_products
}

module.exports = sorting_asc_des