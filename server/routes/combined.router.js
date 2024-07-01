const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const imageId = req.query.imageId;
    const queryText = 'SELECT * FROM poems WHERE image_id = $1';
  
    pool.query(queryText, [imageId])
      .then(result => res.json(result.rows))
      .catch(error => {
        console.error('Error fetching poems:', error);
        res.status(500).json({ error: 'Failed to fetch poems' });
      });
  });
module.exports = router;
