const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/combined', (req, res) => {
  const queryText = `
   SELECT 
    images.id AS imageId, 
    images.url AS imageUrl, 
    poems.id AS poemId, 
    poems.poems AS poemText,
    poems.user_id AS poemUserId,
    images.user_id AS imageUserId,
    images.likes AS imageLikes,
    poems.likes AS poemLikes
FROM images
JOIN poems ON images.id = poems.image_id;
  `;

  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error('Error fetching combined data:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
