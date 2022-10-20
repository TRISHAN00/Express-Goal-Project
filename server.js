const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use("/api/goals", require("./routes/routes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
