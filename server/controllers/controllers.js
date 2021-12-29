const models = require('../models/models');

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
    // console.log(req.body)
    models.updateQA(type, section, id)
      .then((results) => {
        res.status(204).send(results.data)
      })
      .catch((error) => {
        res.status(500).send(error);
      })
  },

  addQA: (req, res) => {
    models.addQA(req.body) //prevent invalid input from front end
      .then((results) => {
        res.status(201).send(results.data)
      })
      .catch((error) => {
        res.status(505).send(error)
      })
  },

  getRelated: (req, res) => {
    models.getRelated(req.query)
      .then((results) => {
        let fetchAllData = [];
        results.data.forEach((relatedId) => {
          fetchAllData.push(models.getProducts({product_id: relatedId}), models.getStyles({product_id: relatedId}), models.getMeta({product_id: relatedId}));
        })
        return Promise.all(fetchAllData);
      })
      .then((results) => {
        let allProductInfo = [];
        for (var i = 0; i < results.length; i+=3) {
          let productInfo = {
            id: results[i].data.id,
            category: results[i].data.category,
            name: results[i].data.name,
            defaultPrice: results[i].data.default_price,
            features: results[i].data.features
          };

          let styles = results[i + 1].data.results;
          for (let j = 0; j < styles.length; j++) {
            if (styles[j]['default?']) {
              productInfo.thumbnailUrl = styles[j].photos[0].thumbnail_url;
              if (styles[j].sale_price) {
                productInfo.salePrice = styles[j].sale_price;
              }
            }
          }
          productInfo.thumbnailUrl = productInfo.thumbnailUrl || styles[0].photos[0].thumbnail_url;

          let ratings = results[i + 2].data.ratings;
          let numberOfRatings = 0;
          let totalRating = 0;
          for (let key in ratings) {
            numberOfRatings += Number(ratings[key]);
            totalRating += (Number(key) * Number(ratings[key]));
          }
          productInfo.rating = totalRating / numberOfRatings;
          allProductInfo.push(productInfo);
        }
        res.send(allProductInfo);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
};
