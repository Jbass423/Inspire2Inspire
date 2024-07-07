const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 5001;
const imagesRouter = require('./routes/template.router');
const poemsRouter = require('./routes/poems.router')
const favRouter = require('./routes/favorites.router')

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/images', imagesRouter);
app.use('/api/poems', poemsRouter)
app.use('/api/favorites', favRouter)
app.get('/api/images/:imageId', (req, res) => {
  const imageId = parseInt(req.params.imageId);
  const image = images.find(img => img.id === imageId);

  if (!image) {
    return res.status(404).json({ error: 'Image not found' });
  }

  res.json(image);
});



// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
