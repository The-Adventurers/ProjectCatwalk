const axios = require('axios');
const config = require('../../config');

const headers = { Authorization: `${config.access_token}` };

module.exports = {
  getProducts: (params) => {
    if (params !== undefined) {
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${params}`, { headers });
    }
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', { headers });
  },
  getReviews: (params) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/?product_id=${params}`, { headers }),
  getMeta: (params) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?product_id=${params}`, { headers }),
  getQuestions: (params) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?&product_id=${params}`, { headers }),
  getAnswers: (params) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${params}/answers`, { headers }),
  getCart: () => axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', { headers }),
};
