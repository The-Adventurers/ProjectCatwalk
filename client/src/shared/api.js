import axios from 'axios';

export const getProducts = (id) => {
  if (id !== undefined) {
    return axios.get('/api/catwalk/products', {
      params: { id: id }
    })
  } else {
    return axios.get('/api/catwalk/products')
  };
};

export const getReviews = (id) => {
  return axios.get('/api/catwalk/reviews', {
    params: { id: id }
  })
};

export const getMeta = (id) => {
  return axios.get('/api/catwalk/meta', {
    params: { id: id }
  })
};

export const getQuestions = (id) => {
  return axios.get('/api/catwalk/questions', {
    params: { id: id }
  })
};

export const getAnswers = (id) => {
  return axios.get('/api/catwalk/questions', {
    params: { id: id }
  })
};