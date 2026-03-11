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
  {
    text: "How's everyone doing today?",
    user: "Sophia",
    added: new Date(),
  },
  {
    text: "Just finished my project!",
    user: "Liam",
    added: new Date(),
  },
  {
    text: "Anyone up for a game tonight?",
    user: "Noah",
    added: new Date(),
  },
  {
    text: "Learning Express is pretty fun.",
    user: "Olivia",
    added: new Date(),
  },
  {
    text: "Does anyone know a good JavaScript tutorial?",
    user: "Ethan",
    added: new Date(),
  },
  {
    text: "Debugging code at 2 AM ",
    user: "Ava",
    added: new Date(),
  },
  {
    text: "Finally fixed that bug!",
    user: "Mason",
    added: new Date(),
  },
  {
    text: "Time for a coffee break",
    user: "Isabella",
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
