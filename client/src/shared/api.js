import axios from 'axios';

export const getProducts = (paramsObject) => {
  if (paramsObject.id !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: { paramsObject },
    });
  }
  return axios.get('/api/catwalk/products');
};

export const getReviews = (paramsObject) => axios.get('/api/catwalk/reviews', { params: paramsObject });

export const getMeta = (productId) => axios.get('/api/catwalk/meta', { params: { id: productId } });

export const getQuestions = (paramsObject) => axios.get('/api/catwalk/questions', { params: paramsObject });

export const getAnswers = (paramsObject) => axios.get('/api/catwalk/questions', { params: paramsObject });
