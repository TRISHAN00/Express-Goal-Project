const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals on PORT" });
};

const setGoal = (req, res) => {
  res.status(200).json({ message: "Set Goal" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal on ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal on ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
