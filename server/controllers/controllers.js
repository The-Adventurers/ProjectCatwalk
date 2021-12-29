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
  getRelated: (req, res) => {
    models.getRelated(req.query)
      .then((results) => {
        res.send(results.data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  getRelatedInfo: (req, res) => {
    let getAllInfo = [models.getProducts(req.query), models.getStyles(req.query), models.getMeta(req.query)];
    Promise.all(getAllInfo)
      .then((results) => {
        let productInfo = {
          id: results[0].data.id,
          category: results[0].data.category,
          name: results[0].data.name,
          defaultPrice: results[0].data.default_price,
          features: results[0].data.features
        };

        let styles = results[1].data.results;
        for (let i = 0; i < styles.length; i++) {
          if (styles[i]['default?']) {
            productInfo.thumbnailUrl = styles[i].photos[0].thumbnail_url;
            if (styles[i].sale_price) {
              productInfo.salePrice = styles[i].sale_price;
            }
          }
        }
        productInfo.thumbnailUrl = productInfo.thumbnailUrl || styles[0].photos[0].thumbnail_url;

        let ratings = results[2].data.ratings;
        let numberOfRatings = 0;
        let totalRating = 0;
        for (let key in ratings) {
          numberOfRatings += Number(ratings[key]);
          totalRating += (Number(key) * Number(ratings[key]));
        }
        productInfo.rating = totalRating / numberOfRatings;
        res.send(productInfo);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
};
