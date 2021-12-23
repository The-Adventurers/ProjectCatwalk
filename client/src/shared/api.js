import axios from 'axios';

export const getProducts = (productId) => {
  if (productId !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: { id: productId },
    });
  }
  return axios.get('/api/catwalk/products');
};

export const getReviews = (paramsObject) => axios.get('/api/catwalk/reviews', { params: paramsObject });

export const getMeta = (productId) => axios.get('/api/catwalk/meta', { params: { id: productId } });

export const getQuestions = (paramsObject) => axios.get('/api/catwalk/questions', { params: paramsObject });

export const getAnswers = (productId) => axios.get('/api/catwalk/questions', { params: { id: productId } });
