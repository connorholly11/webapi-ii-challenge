const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("HELLO POSTS ROUTER HERE");
});

module.exports = router;
