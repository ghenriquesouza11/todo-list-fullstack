const tasksModels = require('../models/tasksModels');

const getAlltasks = async (_req, res) => {
  const tasks = await tasksModels.getAllTasks();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModels.createTask(req.body);
  return res.status(201).json(createdTask);
};


module.exports = {
  getAlltasks,
  createTask
};