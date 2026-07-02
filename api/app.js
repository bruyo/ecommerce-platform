const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 }
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// User login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    return res.json({
      message: 'Login successful',
      token: 'sample-token'
    });
  }

  res.status(401).json({
    message: 'Invalid credentials'
  });
});

// Place an order
app.post('/orders', (req, res) => {
  res.status(201).json({
    message: 'Order placed successfully',
    order: req.body
  });
});

module.exports = app;
