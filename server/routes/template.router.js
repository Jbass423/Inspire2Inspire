const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `
  SELECT * FROM "images";
  `;
  pool.query(queryText)
  .then((response)=>{
    console.log(response.rows)
    res.status(200).send(response.rows);
  })
  .catch ((error)=>{
    console.log("failed in images get route ", error );
  })
});

/**
 * POST route template
 */
router.post('/images', (req, res) => {
  const { url, user_id} = req.body

const queryText = `
INSERT INTO "images" ("url", "user_id")
VALUES ( $1, $2);
`;
pool.query(queryText, [url, user_id])
.then((response)=>{
  console.log("images uploaded");
  res.status(201).send(response.rows)
})
.catch((error)=>{
  console.log("image post failed", error );
  res.sendStatus(500)
})
  // POST route code here
});

module.exports = router;
