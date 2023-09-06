const sorting_asc_des =(order, products_to_sort)=> {
    let sorted_products = []
        sorted_products = products_to_sort.sort((a,b)=> {
            if(order.includes('aes')){
                return parseInt(a.price) - parseInt(b.price);}
            else if (order.includes('des')){
                return parseInt(b.price) - parseInt(a.price);
        }
    })

    return sorted_products
}


// const sorting_asc_des =(order, products_to_sort)=> {
//     let sorted_products = []
//     if(order.includes('aes')){
//         console.log(order.includes('aes'))
//         sorted_products = products_to_sort.sort((a,b)=> {
//             return parseInt(a.price) - parseInt(b.price);
//           });
//     } else if (order.includes('des')){
//         console.log(order.includes('dees'))
//         sorted_products = products_to_sort.sort((a,b)=> {
//             return parseInt(b.price) - parseInt(a.price);
//          });
//     }

//     return sorted_products
// }

module.exports = sorting_asc_des