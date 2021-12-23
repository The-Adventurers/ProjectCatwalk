const axios = require('axios');
const config = require('../../config');

const headers = { Authorization: `${config.access_token}` };

module.exports = {
  getProducts: (paramsObj) => {
    if (paramsObj.product_id !== undefined) {
      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${paramsObj.product_id}`, { headers, params: paramsObj });
    }
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', { headers });
  },
  getReviews: (paramsObj) => axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/', { headers, params: paramsObj }),
  getMeta: (paramsObj) => axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/', { headers, params: paramsObj }),
  getQuestions: (paramsObj) => axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', { headers, params: paramsObj }),
  getAnswers: (paramsObj) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${paramsObj.question_id}/answers`, { headers, params: paramsObj }),
  getCart: () => axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', { headers }),
};
