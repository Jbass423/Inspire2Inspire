const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req,res)=> { 
    const queryText = `
    SELECT * FROM "favorites" ; 
    `
    pool.query(queryText)
    .then((result)=>{
        console.log("checking fav get rout", result.rows);
        res.status(200).json(result.rows);
    })
    . catch ((error)=>{
        console.log("error in fav router ", error)
        res.sendStatus(500)
    })
})

router.post('/', (req,res)=>{
    const { imageId, userID } = req.body
    const queryText = `
    INSERT INTO "favorites" ("imageId" , "userID")
    VALUES ($1, $2)
    `
    pool.query(queryText, [imageId, userID])
     .then((result)=>{
        res.status(201).json(result.rows[0])
     })
     . catch((error)=>{
        console.log("error in post fav rout", error)
        res.sendStatus(500)
     })
})

module.exports = router;