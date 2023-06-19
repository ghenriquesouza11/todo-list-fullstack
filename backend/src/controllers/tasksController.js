const tasksModels = require('../models/tasksModels');

const getAlltasks = async (req, res) => {
  const tasks = await tasksModels.getAllTasks();
  return res.status(200).json(tasks);
};

module.exports = {
  getAlltasks
};