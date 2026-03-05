const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;

app.use((req, res) => {
    res.send("Hello world");
})

app.listen(PORT, (error) => {
    if(error){
        throw error;
    }

    console.log("Listening on port " + PORT);
})