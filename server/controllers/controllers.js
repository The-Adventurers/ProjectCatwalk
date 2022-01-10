const models = require('../models/models');
const redisClient = require('../cache.js');

module.exports = {
  getProducts: (req, res) => {
    models.getProducts(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getReviews: (req, res) => {
    models.getReviews(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },

  postReviews: (req, res) => {
    models.postReviews(req.query)
      .then(res =>
        {res.status(201).send(results.data)
      })
      .catch((error) => {
      res.status(505).send(error)
      })
  },

  getMeta: (req, res) => {
    models.getMeta(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getQuestions: (req, res) => {
    models.getQuestions(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getAnswers: (req, res) => {
    models.getAnswers(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getCart: (req, res) => {
    models.getCart()
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getStyles: (req, res) => {
    models.getStyles(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  updateQA: (req, res) => {
    const { type, section, id } = req.body;
    models.updateQA(type, section, id)
      .then((results) => {
        res.status(204).send(results.data)
      })
      .catch((error) => {
        res.status(500).send(error);
      })
  },
  addQA: (req, res) => {
    models.addQA(req.body)
      .then((results) => {
        res.status(201).send(results.data)
      })
      .catch((error) => {
        res.status(505).send(error)
      })
  },
  getRelated: (req, res) => {
    const searchTerm = req.query.product_id;
    redisClient.get(searchTerm)
      .then((results) => {
        if (results) {
          res.status(200).send(JSON.parse(results));
        } else {
          return models.getRelated(req.query);
        }
      })
      .then((results) => {
      let fetchAllData = [];
      results.data.forEach((relatedId) => {
        fetchAllData.push(models.getProducts({product_id: relatedId}), models.getStyles({product_id: relatedId}), models.getMeta({product_id: relatedId}));
      })
      return Promise.all(fetchAllData);
      })
      .then((results) => {
        let allData = [];
        for (var i = 0; i < results.length; i++) {
          allData.push(results[i].data)
        }
        redisClient.set(searchTerm, JSON.stringify(allData));
        res.status(200).send(allData);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  postCart: (req, res) => {
    models.postCart(req.body)
      .then((results) =>{
       res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      })
  },
};
