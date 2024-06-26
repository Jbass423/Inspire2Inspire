const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/',(req, res)=>{
    const queryText = `
    SELECT "poems" FROM "poems";
    `
    pool.query(queryText)
    .then((response)=>{
        console.log(response.rows)
        res.status(200).send(response.rows);
        })
        .catch ((error)=>{
            console.log("error in poems get route ", error)
            res.sendStatus(500)
        })
})

router.post('/', (req, res) => {
    const { poems, user_id } = req.body
  
  const queryText = `
    INSERT INTO "poems" ("poems", "user_id")
    VALUES ($1, $2);
  `;
  pool.query(queryText, [ poems , user_id ])
  .then((response)=>{
    console.log("poem uploaded");
    res.status(201).send(response.rows)
  })
  .catch((error)=>{
    console.log("poem post failed", error );
    res.sendStatus(500)
  })
    // POST route code here
  });


router.delete('/:id',(res,req)=>{
    const {id} = req.params
    const queryText = `
    DELETE FROM "poems" WHERE "id" = $1; 
    `

    pool.query(queryText, [id])
    .then((result)=>{
        console.log("delete worked ");
        res.sendStatus(200)
    })
    . catch((error)=>{
        console.log("erroe in delete router", error );
    })
})

module.exports = router;
