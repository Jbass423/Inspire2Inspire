const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM poems;';
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error('Error fetching poems:', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const { poems, user_id, image_id } = req.body;

  const queryText = `
    INSERT INTO poems (poems, user_id, image_id)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  pool.query(queryText, [poems, user_id, image_id])
    .then((response) => {
      res.status(201).send(response.rows[0]);
    })
    .catch((error) => {
      console.error('Error adding poem:', error);
      res.sendStatus(500);
    });
});


router.delete('/:id',(req,res)=>{
    const {id} = req.params
    
    const queryText = `
    DELETE FROM "poems" WHERE "id" = $1; 
    `

    pool.query(queryText, [id])
    .then((result)=>{
       
        res.sendStatus(200)
    })
    . catch((error)=>{
        console.log("erroe in delete router", error );
    })
})

router.put('/likes/:id', (req, res) => {
    const {id} = req.params
    
    
  
    const queryText = `
     UPDATE "poems"
     SET "likes" = "likes" + 1 
     WHERE "id" = $1;
     `;
    
     pool.query(queryText, [id])
     .then((result)=>{
      
      console.log(result);
      res.sendStatus(200);
    })
      .catch((error)=>{
        console.error("error in put", error );
        res.sendStatus(500);
      });
  });

  router.put('/:id', (req, res) => {
   
    const poemId  = req.params.id
    const { poem } = req.body
    console.log('Received poemId:', poemId);
    console.log('Received poem:', poem);
    const queryText = `UPDATE "poems" SET "poems" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [poem, poemId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;