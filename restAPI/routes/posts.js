const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

//get all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: err });
  }
});

// router.post("/", (req, res) => {
//   console.log(req.body);
// });

//submits the post
router.post("/", async (req, res) => {
  const post = new Post({
    question: req.body.question,
    correct_answer: req.body.correct_answer,
    incorrect_answers: req.body.incorrect_answers
  });
  try {
    const postSaved = await post.save();
    res.json(postSaved);
  } catch (err) {
    res.json({ message: err });
  }
});

// question: req.body.question,
// correct_answer: req.body.correct_answer,
// incorrect_answers: req.body.incorrect_answers

//find sepcific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ msg: err });
  }
});

//delete
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ msg: err });
  }
});

//update
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
