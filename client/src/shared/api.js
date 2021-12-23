import axios from 'axios';

export const getProducts = (productId) => {
  if (productId !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: { id: productId },
    });
  }
  return axios.get('/api/catwalk/products');
};

export const getReviews = (productId) => axios.get('/api/catwalk/reviews', { params: { id: productId } });

export const getMeta = (productId) => axios.get('/api/catwalk/meta', { params: { id: productId } });

export const getQuestions = (productId) => axios.get('/api/catwalk/questions', { params: { id: productId } });

export const getAnswers = (productId) => axios.get('/api/catwalk/questions', { params: { id: productId } });
