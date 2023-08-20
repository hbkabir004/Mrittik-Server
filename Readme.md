# Mrittik Server Side Repository

## Hosted in Vercel -> [Mrittik Server](http://localhost:5000/)

## Live Links

### Get all Product Categories: https://mrittik-server.vercel.app/category

Get Product details by category id: https://mrittik-server.vercel.app/products/category/${id}

Example: https://mrittik-server.vercel.app/products/category/1

#### Get Category by search: https://mrittik-server.vercel.app/category?[dataProperty]=[dataValue]

#### Example (With Name): https://mrittik-server.vercel.app/category?name=Furniture
#### Example (With ID): https://mrittik-server.vercel.app/category?categoryID=3

<br>

### Get all Products: https://mrittik-server.vercel.app/products

Get Product details by Product id: https://mrittik-server.vercel.app/products/${id}

Example: https://mrittik-server.vercel.app/products/1

#### Get Product by Search: https://mrittik-server.vercel.app/products?[dataProperty]=[dataValue]

#### Example (With Name): https://mrittik-server.vercel.app/products?name=Decor+Plant
#### Example (With ID): https://mrittik-server.vercel.app/products?id=7

<br>

### Get all Products with Tags: https://mrittik-server.vercel.app/tags

Search Products by Tag Name: https://mrittik-server.vercel.app/products?[TagName]=[SearchItem]

Example: [https://mrittik-server.vercel.app/products?tag=a](https://mrittik-server.vercel.app/products?tag=a)

<br>

### Get all Products with Brands: https://mrittik-server.vercel.app/brands

Search Products by Tag Name: https://mrittik-server.vercel.app/products?[BrandName]=[SearchItem]

Example: [https://mrittik-server.vercel.app/products?brand=a](https://mrittik-server.vercel.app/products?brand=a)



## Setting up the development environment

Download the [NodeJS](https://nodejs.org/en) and install it.

# How to run code

## Clone the repository

```sh
git clone https://github.com/hbkabir004/Mrittik-Server.git
```

Now, open the <b>Mrittik-Server</b> folder in your <b>IDE (VS Code recommended)</b> and run the following commands on <b>terminal (Git Bash)</b>

```bash
  npm install --global yarn
```
```bash
  yarn install
```
```bash
  nodemon index
```

You can run the local server on port [5000](http://localhost:5000/)
<br>
Now, you should have accessed the following URLs on your local server.

### Get all Product Categories: http://localhost:5000/category

Get Product details by category id: http://localhost:5000/products/category/${id}

Example: http://localhost:5000/products/category/1

#### Get Category by search: http://localhost:5000/category?[dataProperty]=[dataValue]

#### Example (With Name): http://localhost:5000/category?name=Furniture
#### Example (With ID): http://localhost:5000/category?categoryID=3

<br>

### Get all Products: http://localhost:5000/products

Get Product details by Product id: http://localhost:5000/products/${id}

Example: http://localhost:5000/products/1

#### Get Product by Search: http://localhost:5000/products?[dataProperty]=[dataValue]

#### Example (With Name): http://localhost:5000/products?name=Decor+Plant
#### Example (With ID): http://localhost:5000/products?id=7

<br>

### Get all Products with Tags: http://localhost:5000/tags

Search Products by Tag Name: http://localhost:5000/products?[TagName]=[SearchItem]

Example: [http://localhost:5000/products?tag=a](http://localhost:5000/products?tag=a)

<br>

### Get all Products with Brands: http://localhost:5000/brands

Search Products by Tag Name: http://localhost:5000/products?[BrandName]=[SearchItem]

Example: [http://localhost:5000/products?brand=a](http://localhost:5000/products?brand=a)

