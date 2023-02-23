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

app.get('/category', (req, res) => {
    res.send(category)
  })
  
  app.get('/products', (req, res) => {
    res.send(products)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
