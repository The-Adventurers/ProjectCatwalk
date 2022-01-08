const express = require('express');
const path = require('path');
const controllers = require('./controllers/controllers');

const app = express();
const PORT = 3030;

// Middleware
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

// Routes
app.get('/api/catwalk/products', controllers.getProducts);
app.get('/api/catwalk/reviews', controllers.getReviews);
app.get('/api/catwalk/questions', controllers.getQuestions);
app.get('/api/catwalk/answers', controllers.getAnswers);
app.get('/api/catwalk/cart', controllers.getCart);
app.get('/api/catwalk/meta', controllers.getMeta);
app.get('/api/catwalk/styles', controllers.getStyles);
app.put('/api/catwalk/updateQA', controllers.updateQA);
app.post('/api/catwalk/addQA', controllers.addQA);
app.get('/api/catwalk/related', controllers.getRelated);
app.post('/api/catwalk/cart', controllers.postCart);
app.post('/api/catwalk/reviews', controllers.postReviews);

app.listen(PORT, () => console.log(`Listening to port... ${PORT}`));