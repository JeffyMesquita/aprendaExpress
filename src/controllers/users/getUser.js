const getUserController = (req, res) => {
  return User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(500).json({ error: [err.message] }));
};

module.exports = getUserController;