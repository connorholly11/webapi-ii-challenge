const express = require("express");
const db = require("../db");
const router = express.Router();

//POST IS WORKING
router.post("/", (req, res) => {
  const newPost = req.body;

  db.insert(newPost)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR CREATING A NEW POST"
      });
    });
});

router.post("/:id/comments", (req, res) => {
  const newComment = req.body;

  db.insertComment(newComment)
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR POSTING ID COMMENTS"
      });
    });
});

//GET IS WORKING
router.get("/", (req, res) => {
  db.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR GETTING POSTS"
      });
    });
});

//GET ID IS WORKING
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.findById(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR GETTING POSTS ID"
      });
    });
});

router.get("/:id/comments", (req, res) => {
  const id = req.params.id;
  //   const comments = req.params.comments;

  db.findCommentById(id)
    .then(comment => {
      res.status(200).json(comment);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR GETTING ID OF COMMENTS"
      });
    });
});

//DELETE POST ID IS WORKING
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then(post => {
      res.status(204).json(post);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR DELETING POSTS ID"
      });
    });
});

//UPDATING POST ID WORKS
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.update(id, changes)
    .then(updated => {
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: "404 not found updating"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "THERE IS AN ERROR UPDATING POSTS ID"
      });
    });
});

module.exports = router;
