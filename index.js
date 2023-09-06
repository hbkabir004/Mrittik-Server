const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const category = require('./data/category.json');
const products = require('./data/products.json');
const tags = require('./data/tag.json');
const brands = require('./data/brand.json');
// const aesProducts = require('./data/products.json');
// const desProducts = require('./data/products.json');

// compare function
const {compare} = require('./commonFunctions/compare')
// const b = require('./commonFunctions/compare')

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
      // console.log(key, filters);
      let productSearching = p[key].toString().toLowerCase();
      let productFiltering = filters[key].toString().toLowerCase();
      isValid = isValid && productSearching.includes(productFiltering);
    }
    return isValid;
  });
  res.send(searched_product);
  // console.log(searched_product);
})

// Search Product By Tags 
app.get('/tags', (req, res) => {
  const filters = req.query;
  const searched_tag = tags.filter(p => {
    let isValid = true;
    for (key in filters) {
      // console.log(key, filters);
      let tagSearching = p[key].toString().toLowerCase();
      let tagFiltering = filters[key].toString().toLowerCase();
      isValid = isValid && tagSearching.includes(tagFiltering);
    }
    return isValid;
  });
  res.send(searched_tag);
  // console.log(searched_product);
})

// Search Product By Brands 
app.get('/brands', (req, res) => {
  const filters = req.query;
  const searched_brand = brands.filter(p => {
    let isValid = true;
    for (key in filters) {
      // console.log(key, filters);
      let brandSearching = p[key].toString().toLowerCase();
      let brandFiltering = filters[key].toString().toLowerCase();
      isValid = isValid && brandSearching.includes(brandFiltering);
    }
    return isValid;
  });
  res.send(searched_brand);
  // console.log(searched_product);
})

// Sorting Price Low to High
app.get('/products/aes', (req, res) => {
  // sending path and product to compare function for sorting
  const data = compare(req.path, products)
  res.send(data);
})

// Sorting Price High to Low 
app.get('/products/des', (req, res) => {
  const data = compare(req.path, products)
  res.send(data);
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

//   Search Product by CategoryID
app.get('/products/category/:id', (req, res) => {
  const id = req.params.id;
  const category_product = products.filter(product => product.categoryID === id);
  // const category_product = products.filter(product => console.log(product.categoryID));
  // console.log(id);

  const filters = req.query;
  const category_searched_product = category_product.filter(p => {
    let isValid = true;
    for (key in filters) {
      // console.log(key, filters);
      let productSearching = p[key].toString().toLowerCase();
      let productFiltering = filters[key].toString().toLowerCase();
      isValid = isValid && productSearching.includes(productFiltering);
    }
    return isValid;
  });

  res.send(category_searched_product);

})

//   Search Product by TAG
app.get('/products/tag/:id', (req, res) => {
  const id = req.params.id;
  const tag_product = products.filter(product => product.tagID === id);
  res.send(tag_product);

})

//  Sorting category Products in ascending order
app.get('/products/category/:id/aes', (req, res) => {
  const id = req.params.id;
  const category_product = products.filter(product => product.categoryID === id);
  // const category_product = products.filter(product => console.log(product.categoryID));
  // console.log(id);

  const data = compare(req.path, category_product)
  res.send(data);

})

//   Sorting category Products in descending order
app.get('/products/category/:id/des', (req, res) => {
  const id = req.params.id;
  const category_product = products.filter(product => product.categoryID === id);
  // const category_product = products.filter(product => console.log(product.categoryID));
  // console.log(id);

  const data = compare(req.path, category_product)
  res.send(data);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
