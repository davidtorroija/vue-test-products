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

app.post('/Product', (req, res) => {
  if (!req.body.imageURL) {
    return res.status(400).json({ msg: 'imageURL is required' });
  }
  if (!req.body.description) {
    return res.status(400).json({ msg: 'description is required' });
  }
  const newItem = new Product(req.body);
  return newItem.save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch(() => {
      res.status(500).json({ msg: 'something weird happened!' });
    });
});

const port = 1234;

app.listen(port, () => console.log('Server running...'));
