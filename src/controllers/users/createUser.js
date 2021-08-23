const createUserController = (req, res) => {
  return User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(500).json({ error: [err.message] }));
};

module.exports = createUserController;