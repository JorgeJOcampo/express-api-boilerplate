const User = require('../models/User');

// const userDTO = ({ _id, name, email, role }) => ({ _id, name, email, role });
const userDTO = ({ _id, name, email, role } = {}) => {
  console.log('userDTO -> name', name);

  return { _id, name, email, role };
};

module.exports = {
  /**
   * TODO Pagination
   */
  get: (req, res) => {
    return User.find().then((users) =>
      res.send(users.map((user) => userDTO(user)))
    );
  },
  getById: (req, res) =>
    User.findById(req.params.id).then((user) => res.send(userDTO(user))),
  /**
   * TODO Validations
   */
  create: (req, res) => {
    const { name, email, role } = req.body;
    const user = new User({ name, email, role });
    user
      .save()
      .then(({ _id, name, email, role }) =>
        res.send({ _id, name, email, role })
      )
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      );
  },
  /**
   * TODO Validations
   * TODO use upsert?
   */
  update: (req, res) => {
    const { name, email, role } = req.body;
    const { id } = req.params;
    User.findByIdAndUpdate(
      id,
      { name, email, role },
      {
        new: true
      }
    )
      .then((user) => console.log(user) || res.send(userDTO(user)))
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      );
  },
  /**
   * TODO Validations
   */
  patch: (req, res) => {
    const { name, email, role } = req.body;
    const { id } = req.params;
    User.findByIdAndUpdate(
      id,
      { name, email, role },
      {
        new: true
      }
    )
      .then((user) => console.log(user) || res.send(userDTO(user)))
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      );
  },
  remove: (req, res) => {
    return User.findByIdAndDelete(req.params.id)
      .then((user) => (user ? res.send(userDTO(user)) : res.status(204).send()))
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      );
  }
};
