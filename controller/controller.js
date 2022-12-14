// @desc Get Goals
// @route GET /api/goals
// @access Private

const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw Error("Please add a text a text field.");
  }
  res.status(200).json({ message: "Set Goal" });
};

// @desc Update Goals
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal on ${req.params.id}` });
};

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal on ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
