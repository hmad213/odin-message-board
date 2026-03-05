const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log("Listening on port " + PORT);
});
