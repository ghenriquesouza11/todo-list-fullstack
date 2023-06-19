const getAlltasks = (req, res) => {
  return res.status(200).json({ message: 'controller ok!' });
};

module.exports = {
  getAlltasks
};