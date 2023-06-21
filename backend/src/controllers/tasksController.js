const tasksModels = require('../models/tasksModels');

const getAlltasks = async (_req, res) => {
  const tasks = await tasksModels.getAllTasks();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModels.createTask(req.body);
  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const {id} = req.params;

  await tasksModels.deleteTask(id);

  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const {id} = req.params;

  await tasksModels.updateTask(id, req.body);

  return res.status(204).json();
};


module.exports = {
  getAlltasks,
  createTask,
  deleteTask,
  updateTask
};