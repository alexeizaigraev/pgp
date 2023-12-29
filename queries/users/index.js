const { getAllUsers } = require("./get-all");
const { getByEmail } = require('./get-by-email');
const { getById } = require('./get-by-id');
const { registerUser } = require('./register');
const { updateUser } = require('./update');
const { deleteUser } = require('./delete');


module.exports = {
  getAllUsers,
  getByEmail,
  getById,
  registerUser,
  updateUser,
  deleteUser,
};
