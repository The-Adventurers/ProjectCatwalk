const express = require('express');
const app = express();
const PORT = 3000;

const controllers = require('./controllers/controllers.js');

// Middleware
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

// Routes
app.get('/api/catwalk/products', controllers.getProducts);
app.get('/api/catwalk/reviews', controllers.getReviews);
app.get('/api/catwalk/questions', controllers.getQuestions);
app.get('/api/catwalk/answers', controllers.getAnswers);
app.get('/api/catwalk/cart', controllers.getCart);
app.get('/api/catwalk/meta', controllers.getMeta);

app.listen(PORT, () => (
  console.log(`Server listening on port ${PORT}`)
));