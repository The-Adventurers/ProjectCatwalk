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

    postCart: (paramsObj) => axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', { headers, params: paramsObj }),

    getStyles: (paramsObj) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${paramsObj.product_id}/styles`, { headers, params: paramsObj }),

    updateQA:(type, section, id) => {// type questions or answers- section report or helpful // id- QA id
      const option = {
        method: 'put',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/${type}/${id}/${section}`,
        headers: headers
      };
      return axios(option)
    },

    addQA:(paramsObj) => {//add question doesn't required ID
      console.log('from post req in Models >> ', paramsObj)
      const question_id = paramsObj.question_id;
      const option = {
        method: 'post',
        url: question_id ? `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${question_id}/answers` : 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions',
        headers: headers,
        data: paramsObj
      };
      return axios(option)
    },

    getRelated: (paramsObj) => axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${paramsObj.product_id}/related`, { headers, params: paramsObj })
};
