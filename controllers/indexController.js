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

const getIndex = (req, res) => {
  res.render("index", { messages: messages });
};

const getNew = (req, res) => {
  res.render("form");
};

const postNew = (req, res) => {
  const name = req.body.name;
  const text = req.body.text;

  messages.push({ text: text, user: name, added: new Date() });

  res.redirect("/");
};

const getMessage = (req, res) => {
  res.redirect("/");
};

const getMessageIndex = (req, res) => {
  res.render("message", { message: messages[req.params.index - 1] });
};

module.exports = { getIndex, getNew, postNew, getMessage, getMessageIndex };
