const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const name = req.body.name;
  const text = req.body.text;

  messages.push({ text: text, user: name, added: new Date() });

  res.redirect("/");
});

indexRouter.get("/message", (req, res) => {
  res.redirect("/");
});

indexRouter.get("/message/:number", (req, res) => {
  res.render("message", { message: messages[req.params.number - 1] });
});

module.exports = indexRouter;
