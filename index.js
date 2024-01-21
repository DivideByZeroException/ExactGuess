
const express = require("express");

const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));
