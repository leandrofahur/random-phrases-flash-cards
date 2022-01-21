const path = require("path");

// call express pkg and create an app instance of express:
const express = require("express");
const app = express();

// set up express for json compaibility
app.use(express.json({ extended: false }));

// set up the public static files directory:
app.use(express.static("public"));

/*
 *
 * ROUTES:
 *
 */
app.get("/", (req, res) => {
  res.status(200).sendFile("index.html");
});

const PORT = process.env.PORT | 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server up and running on port ${PORT}`);
});
