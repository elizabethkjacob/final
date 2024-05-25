const express = require("express");
const router = express.Router();
const posts = require("../model/post");

router.post('/add',async(req,res)=>{
    try {
        const post = req.body;
        const data = await posts(post).save();
        res.status(200).send({message:"todo added"})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})

router.get('/view',async(req,res)=>{
    try {
         const data = await posts.find();
          res.status(200).send(data)
          console.log(data)
    }catch (error) {
         console.log(error)
    }
  })
  router.get('/posts/:id', async (req, res) => { 
    try {
      const post = await posts.findById(req.params.id);
      res.json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.delete('/posts/:id', async(req, res) => {
    try {
      console.log("here")
        const deletedPost = await posts.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ error: ' Not found' });
        }
        res.json({ message: ' deleted successfully', data: deletedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router
