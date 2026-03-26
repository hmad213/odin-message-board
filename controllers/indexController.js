const db = require("../db/queries")

const getIndex = async(req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { messages: messages });
};

const getNew = (req, res) => {
  res.render("form");
};

const postNew = (req, res) => {
  const user = req.body.name;
  const text = req.body.text;

  db.insertMessage({ text, user })

  res.redirect("/");
};

const getMessage = (req, res) => {
  res.redirect("/");
};

const getMessageIndex = async(req, res) => {
  const message = await db.getMessage(req.params.index);
  res.render("message", { message: message });
};

module.exports = { getIndex, getNew, postNew, getMessage, getMessageIndex };
