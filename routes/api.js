const express = require("express");
const router = express.Router();
const BlogPost = require('../models/BlogPost')
const path = require("path");

router.get("/api", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      res.json(data);
      //console.log("data:", data);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

router.post("/save", (req, res) => {
  const newBlogPost = BlogPost(req.body);

  newBlogPost.save((err)=>{
    if (err) {
      return res.status(500).send("error while saving data");
    }
    return res.send("data saved");
  }  )


});

router.get("/api/witcher", (req, res) => {
  const data = {
    name: "Hello witcher!",
    test_number: 1999,
  };
  res.json(data);
});
/*
router.get("*", (req, res) => {
  res.send("Hi!)");
});*/
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = router;