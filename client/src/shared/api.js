import axios from 'axios';

export const getProducts = (paramsObj) => {
  if (paramsObj.product_id !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: paramsObj ,
    });
  }
  return axios.get('/api/catwalk/products');
};
export const getReviews = (paramsObj) => axios.get('/api/catwalk/reviews', { params: paramsObj });
export const getMeta = (paramsObj) => axios.get('/api/catwalk/meta', { params: paramsObj });
export const getQuestions = (paramsObj) => axios.get('/api/catwalk/questions', { params: paramsObj });
export const getAnswers = (paramsObj) => axios.get('/api/catwalk/questions', { params: paramsObj });
export const getStyles = (paramsObj) => axios.get('/api/catwalk/styles', { params: paramsObj });
export const getRelated = (paramsObj) => axios.get('/api/catwalk/related', { params: paramsObj });
export const updateQA = (paramsObj) => axios.put('/api/catwalk/updateQA', paramsObj);
export const addQA = (paramsObj) => axios.post('/api/catwalk/addQA', paramsObj)
export const getRelatedInfo = (paramsObj) => axios.get('/api/catwalk/relatedInfo', { params: paramsObj });
export const postCart = (bodyObj) => axios.post('/api/catwalk/cart', bodyObj);
export const postReviews = (paramsObj) => axios.post('/api/catwalk/reviews', paramsObj);
