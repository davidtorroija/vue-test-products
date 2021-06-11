/* eslint-disable global-require */
module.exports = (function () {
  const router = require('express').Router();

  const Product = require('../models/Product');
  router.get('/', (req, res) => {
    Product.find()
      .then((items) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(items));
      })
      .catch((err) => res.status(404).json({ msg: 'No items found', err }));
  });

  router.post('/Product', (req, res) => {
    if (!req.body.imageURL) {
      return res.status(400).json({ msg: 'imageURL is required' });
    }
    if (!req.body.description) {
      return res.status(400).json({ msg: 'description is required' });
    }
    const newItem = new Product(req.body);
    return newItem
      .save()
      .then((item) => {
        if (!item) {
          throw new Error('Item not found'); // reject promise with error
        }
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });

  router.put('/Product/:id', (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ msg: 'id is required' });
    }
    if (!req.body.imageURL) {
      return res.status(400).json({ msg: 'imageURL is required' });
    }
    if (!req.body.description) {
      return res.status(400).json({ msg: 'description is required' });
    }

    const query = { _id: req.params.id };
    const newData = {
      imageURL: req.body.imageURL,
      description: req.body.description,
    };

    return Product.findOneAndUpdate(query, newData, (err) => {
      if (err) return res.send(500, { error: err });
      return res.send('Succesfully saved.');
    });
  });

  router.delete('/Product/:id', (req, res) => {
    if (!req.params.id) {
      return res.status(400).json({ msg: 'id is required' });
    }

    return Product.deleteOne({ _id: req.params.id }, (err, result) => {
      if (err) return console.log(err);
      return res.status(200).json({ id: req.params.id, result });
    }).catch((err) => res.status(404).json({ msg: 'No items found', err }));
  });

  router.post('/upload-image', (req, res) => {
    if (req.files) {
      const { image } = req.files;
      const fileName = image.name;
      image.mv(`${__dirname}/../public/db-images/${fileName}`, (err) => {
        if (err) {
          res.status(500).json({ err });
        } else {
          res.status(200).json({ fileName });
        }
      });
    } else {
      res.send('There are no files');
    }
  });

  return router;
}());
