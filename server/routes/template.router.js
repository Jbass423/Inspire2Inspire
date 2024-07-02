const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});

// Initialize multer with the configured storage
const upload = multer({ storage: storage });

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
    res.sendStatus(500)
  })
});




 router.post('/', (req, res) => {
   const { url, user_id } = req.body;

   const queryText = `
   INSERT INTO "images" ("url", "user_id")
   VALUES ($1, $2)
   RETURNING id;
   `;
   pool.query(queryText, [url, user_id])
   .then((response) => {
     console.log("Image uploaded");
     const imageId = response.rows[0].id;
     res.status(201).json({ imageId });
   })
   .catch((error) => {
     console.log("Image POST failed", error);
     res.sendStatus(500);
   });
 });

 router.delete('/:id',(req,res)=>{
   const { id } = req.params
   console.log('Deleting image with ID:', id)
   const queryText = `
   DELETE FROM "images" WHERE "id" = $1;
   `
   pool.query(queryText, [id])
   .then((result)=>{
     console.log('delete worked')
    res.sendStatus(200)
  })
  .catch((error)=>{
     console.log("error in delete router", error)
  })
  })

  router.get('/:imageId', async (req, res) => {
    const imageId = req.params.imageId;
  
    try {
      const queryText = `
        SELECT * FROM "images" 
        WHERE "id" = $1;
      `;
      const response = await pool.query(queryText, [imageId]);
  
      if (response.rows.length === 0) {
        return res.status(404).json({ error: "Image not found" });
      }
  
      res.status(200).json(response.rows[0]); 
    } catch (error) {
      console.error("Failed to fetch image details:", error);
      res.sendStatus(500); 
    }
  });
  


 
  
  

module.exports = router;
