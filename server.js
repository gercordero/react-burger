const express = require("express");

//Express instance
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runing on port ${port}`));
