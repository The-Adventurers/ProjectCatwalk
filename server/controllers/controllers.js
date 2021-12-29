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
  }
};
