import axios from 'axios';

export const getProducts = (productId) => {
  if (id !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: { id: productId }
    })
  } else {
    return axios.get('/api/catwalk/products')
  };
};

export const getReviews = (productId) => {
  return axios.get('/api/catwalk/reviews', {
    params: { id: productId }
  })
};

export const getMeta = (productId) => {
  return axios.get('/api/catwalk/meta', {
    params: { id: productId }
  })
};

export const getQuestions = (productId) => {
  return axios.get('/api/catwalk/questions', {
    params: { id: productId }
  })
};

export const getAnswers = (productId) => {
  return axios.get('/api/catwalk/questions', {
    params: { id: productId }
  })
};
