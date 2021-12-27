import axios from 'axios';

export const getProducts = (paramsObj) => {
  if (paramsObj.product_id !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: paramsObj ,
    });
  }
  return axios.get('/api/catwalk/products');
};
export const getReviews = (paramsObject) => axios.get('/api/catwalk/reviews', { params: paramsObject });
export const getMeta = (paramsObject) => axios.get('/api/catwalk/meta', { params: paramsObject });
export const getQuestions = (paramsObject) => axios.get('/api/catwalk/questions', { params: paramsObject });
export const getAnswers = (paramsObject) => axios.get('/api/catwalk/questions', { params: paramsObject });
export const getStyles = (paramsObject) => axios.get('/api/catwalk/styles', { params: paramsObject });
