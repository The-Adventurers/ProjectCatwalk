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
    console.log('ProductId: ', searchTerm);
    redisClient.get('63616', function (err, data) {
      const hello = data;
      console.log('Data: ', JSON.parse(data));
    });
              // .then((results) => {
          //   console.log('Data: ', results.data);
          //   let fetchAllData = [];
          //   results.data.forEach((relatedId) => {
          //     fetchAllData.push(models.getProducts({product_id: relatedId}), models.getStyles({product_id: relatedId}), models.getMeta({product_id: relatedId}));
          //   })
          //   return Promise.all(fetchAllData);
          // })
          // .then((results) => {
          //   let allData = [];
          //   for (var i = 0; i < results.length; i++) {
          //     allData.push(results[i].data)
          //   }
          //   redisClient.set(searchTerm, JSON.stringify(allData));
          //   res.status(200).send(allData);
          // })
          // .catch((error) => {
          //   res.status(500).send(error);
          // });

          // try {
          //   redisClient.get(searchTerm, async (err, products) => {
          //     if (err) throw err;
          //     console.log('Cache: ', products);
          //     if (products) {
          //         res.status(200).send(JSON.parse(products));
          //     } else {
          //       console.log('Not in cache');
          //       const relatedProducts = await models.getRelated(req.query);
          //       console.log('Data: ', relatedProducts);
          //     }
          //   });
          // } catch(err) {
          //   res.status(500).send(err);
          // }
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
