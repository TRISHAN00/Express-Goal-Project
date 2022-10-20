const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/controller");

const router = require("express").Router();

router.get("/", getGoals);

router.post("/", setGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
