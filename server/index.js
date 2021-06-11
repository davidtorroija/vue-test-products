const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const routes = require('./routes/products');

const app = express();
app.use(fileUpload());

app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect('mongodb://mongo:27018/docker-node-mongo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/', routes);

const port = 1234;

app.listen(port, () => console.log('Server running...'));
