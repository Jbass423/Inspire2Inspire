const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/',(req, res)=>{
    const queryText = `
    SELECT * FROM "poems";
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

module.exports = router;
