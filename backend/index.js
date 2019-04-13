const path = require("path");
const express = require("express");
const { message, messages } = require("./lib/mailgun");

const list = (req, res, next) =>
  messages(req.params.inbox)
    .then(res.json.bind(res))
    .catch(next);

const retrieve = (req, res, next) =>
  message(req.params.key)
    .then(res.json.bind(res))
    .catch(next);

express()
  .use(express.static(path.resolve(__dirname, "../frontend/dist")))
  .get("/api/:inbox", list)
  .get("/api/storage/:key", retrieve)
  .get("*", (_, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"))
  )
  .listen(3000, () => console.log("> Server started"));
