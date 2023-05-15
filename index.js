const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const category = require('./data/category.json');
const products = require('./data/products.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running')
})

// Search Product By Category Properties
app.get('/category', (req, res) => {
  const filters = req.query;
  const searched_category = category.filter(c => {
    let isValid = true;
    for (key in filters) {
      // console.log(key, c[key], filters[key]);
      isValid = isValid && c[key] == filters[key];
    }
    return isValid;
  });
  res.send(searched_category);
})


// Search Product By Product Properties  
app.get('/products', (req, res) => {
  const filters = req.query;
  const searched_product = products.filter(p => {
    let isValid = true;
    for (key in filters) {
      let productSearching = p[key].toString().toLowerCase();
      let productFiltering = filters[key].toString().toLowerCase();
      isValid = isValid && productSearching.includes(productFiltering);
    }
    return isValid;
  });
  res.send(searched_product);
  // console.log(searched_product);
})


//   Search Category by ID
app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  const selected_category = category.find(c => c.id == id);
  res.send(selected_category);
  // console.log(selected_category);
});

//   Search Product by ProductID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const selected_product = products.find(p => p.id == id);
  res.send(selected_product);
  // console.log(selected_product);
});

//   Search Product by category
app.get('/products/category/:id', (req, res) => {
  const id = req.params.id;
  const category_product = products.filter(product => product.categoryID === id);
  // const category_product = products.filter(product => console.log(product.categoryID));
  console.log(id);
  res.send(category_product);

})


// Sort Products by Price in Ascending order
// app.get('/products', (req, res) => {
//   const { sort } = req.query;
//   if (sort === 'price_asc') {
//     const sortedProducts = products.sort((a, b) => a.price - b.price);
//     return res.json({ products: sortedProducts });
//   } else {
//     return res.json({ products: products });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
