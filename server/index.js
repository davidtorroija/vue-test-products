const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/docker-node-mongo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const Product = require('./models/Product');

app.get('/', (req, res) => {
  Product.find()
    .then((items) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(items));
    })
    .catch((err) => res.status(404).json({ msg: 'No items found', err }));
});

app.post('/Product/add', (req, res) => {
  const newItem = new Product({
    name: req.body.name,
  });

  newItem.save()
    .then(res.status(200).json({ msg: 'item saved' }));
});

const port = 1234;

app.listen(port, () => console.log('Server running...'));
