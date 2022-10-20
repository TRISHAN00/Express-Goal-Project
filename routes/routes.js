const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Get Goals On F");
});

module.exports = router;
