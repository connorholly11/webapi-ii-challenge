const express = require("express");
const db = require("./data/db");
const PostsRoutes = require("./data/ExpressRouters/PostsRouter");

const server = express();
server.use(express.json());

server.use("/posts", PostsRoutes);

server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
