const models = require('../models/models');

module.exports = {
  getProducts: (req, res) => {
    const params = req.query.id;
    models.getProducts(params, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  },
  getReviews: (req, res) => {
    const params = req.query.id;
    models.getReviews(params, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  },
  getMeta: (req, res) => {
    const params = req.query.id;
    models.getMeta(params, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  },
  getQuestions: (req, res) => {
    const params = req.query.id;
    models.getQuestions(params, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  },
  getAnswers: (req, res) => {
    const params = req.query.id;
    models.getAnswers(params, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  },
  getCart: (req, res) => {
    models.getCart((error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(results);
      }
    });
  },
};
