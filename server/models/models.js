const axios = require('axios');
const config = require('../../config');

module.exports = {
  getProducts: (params, callback) => {
    if (params !== undefined) {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${params}`, {
        headers: {
          Authorization: `${config.access_token}`,
        },
      })
        .then((results) => {
          callback(null, results.data);
        })
        .catch((error) => {
          callback(error);
        });
    } else {
      axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', {
        headers: {
          Authorization: `${config.access_token}`,
        },
      })
        .then((results) => {
          callback(null, results.data);
        })
        .catch((error) => {
          callback(error);
        });
    }
  },
  getReviews: (params, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/?product_id=${params}`, {
      headers: {
        Authorization: `${config.access_token}`,
      },
    })
      .then((results) => {
        callback(null, results.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
  getMeta: (params, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?product_id=${params}`, {
      headers: {
        Authorization: `${config.access_token}`,
      },
    })
      .then((results) => {
        callback(null, results.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
  getQuestions: (params, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?&product_id=${params}`, {
      headers: {
        Authorization: `${config.access_token}`,
      },
    })
      .then((results) => {
        callback(null, results.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
  getAnswers: (params, callback) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${params}/answers`, {
      headers: {
        Authorization: `${config.access_token}`,
      },
    })
      .then((results) => {
        callback(null, results.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
  getCart: (callback) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', {
      headers: {
        Authorization: `${config.access_token}`,
      },
    })
      .then((results) => {
        callback(null, results.data);
      })
      .catch((error) => {
        callback(error);
      });
  },
};
