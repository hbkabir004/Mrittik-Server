
# 🚀 Mrittik-Server API Documentation

Welcome to **Mrittik-Server** – an open-source REST API developed with **Node.js** and **Express.js**!
This project is designed to help developers easily integrate **searching**, **sorting**, and **filtering** functionality into their applications.

Use these APIs for building e-commerce or any project that requires advanced query capabilities.

---

## 🌐 Live API Endpoints

| 🛠**Feature**                | 🔗**Endpoint**                     | 📌**Example**                                                                                                                    |
| ---------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Get Categories**           | `/category`                            | [View Categories](https://mrittik-server.vercel.app/category)                                                                             |
| **Get Products by Category** | `/products/category/${id}`             | [Example](https://mrittik-server.vercel.app/products/category/1)                                                                          |
| **Search Categories**        | `/category?[dataProperty]=[dataValue]` | [By Name](https://mrittik-server.vercel.app/category?name=Furniture)`<br>`[By ID](https://mrittik-server.vercel.app/category?categoryID=3) |
| **Get All Products**         | `/products`                            | [View All Products](https://mrittik-server.vercel.app/products)                                                                           |
| **Get Product by ID**        | `/products/${id}`                      | [Example](https://mrittik-server.vercel.app/products/1)                                                                                   |
| **Search Products**          | `/products?[dataProperty]=[dataValue]` | [By Name](https://mrittik-server.vercel.app/products?name=Decor+Plant)`<br>`[By ID](https://mrittik-server.vercel.app/products?id=7)       |
| **Get All Tags**             | `/tags`                                | [View Tags](https://mrittik-server.vercel.app/tags)                                                                                       |
| **Search by Tag**            | `/products?[TagName]=[SearchItem]`     | [Example](https://mrittik-server.vercel.app/products?tag=a)                                                                               |
| **Get All Brands**           | `/brands`                              | [View Brands](https://mrittik-server.vercel.app/brands)                                                                                   |
| **Search by Brand**          | `/products?[BrandName]=[SearchItem]`   | [Example](https://mrittik-server.vercel.app/products?brand=a)                                                                             |

---

## 🛠 Local Development Endpoints

| 💻**Feature**                | 🏠**Endpoint**                     | 📌**Example**                                                                                            |
| ---------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Get Categories**           | `/category`                            | [Local Categories](http://localhost:4000/category)                                                                |
| **Get Products by Category** | `/products/category/${id}`             | [Example](http://localhost:4000/products/category/1)                                                              |
| **Search Categories**        | `/category?[dataProperty]=[dataValue]` | [By Name](http://localhost:4000/category?name=Furniture)`<br>`[By ID](http://localhost:4000/category?categoryID=3) |
| **Get All Products**         | `/products`                            | [Local Products](http://localhost:4000/products)                                                                  |
| **Get Product by ID**        | `/products/${id}`                      | [Example](http://localhost:4000/products/1)                                                                       |
| **Search Products**          | `/products?[dataProperty]=[dataValue]` | [By Name](http://localhost:4000/products?name=Decor+Plant)`<br>`[By ID](http://localhost:4000/products?id=7)       |
| **Get All Tags**             | `/tags`                                | [Local Tags](http://localhost:4000/tags)                                                                          |
| **Search by Tag**            | `/products?[TagName]=[SearchItem]`     | [Example](http://localhost:4000/products?tag=a)                                                                   |
| **Get All Brands**           | `/brands`                              | [Local Brands](http://localhost:4000/brands)                                                                      |
| **Search by Brand**          | `/products?[BrandName]=[SearchItem]`   | [Example](http://localhost:4000/products?brand=a)                                                                 |

---

## 🔧 Development Setup

To start working with **Mrittik-Server**, follow these steps:

### 📥 Prerequisites

1. Install [Node.js](https://nodejs.org/en).
2. Install Yarn globally:
   ```bash
   npm install --global yarn
   ```

### 🛠 Clone the Repository

```bash
git clone https://github.com/hbkabir004/Mrittik-Server.git
```

### ⚙️ Install Dependencies

Navigate to the project folder in your terminal and run:


```bash
yarn install
```

### 🚀 Start the Server

Run the following command to start the development server:


```bash
nodemon index
```


### 🌟 Your local server is live at: [http://localhost:4000](http://localhost:4000)

---

## 🤝 Contributing

We ❤️ contributions!
Check out [CONTRIBUTING.md](https://github.com/hbkabir004/Mrittik-Server/blob/main/CONTRIBUTING.md) for details on how you can improve this project.

---

## 📢 Feedback

Have questions or suggestions?
Feel free to [open an issue](https://github.com/hbkabir004/Mrittik-Server/issues) or reach out with your feedback. Let's build something awesome together! 🌟
