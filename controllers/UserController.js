const { body } = require('express-validator');
const User = require('../models/User');
const { onlyNotEmpty, filterBody } = require('../services/UserService');

// const userDTO = ({ _id, name, email, role }) => ({ _id, name, email, role });
const userDTO = ({ _id, name, email, role } = {}) => {
  console.log('userDTO -> name', name);

  return { _id, name, email, role };
};

// runValidators: true,
//          setDefaultsOnInsert: true}

module.exports = {
  /**
   * TODO Pagination
   */
  get: (req, res) =>
    User.find()
      .then((users) => res.send(users.map((user) => userDTO(user))))
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      ),
  getById: (req, res) =>
    User.findById(req.params.id)
      .then((user) => (user ? res.send(userDTO(user)) : res.status(204).send()))
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      ),
  /**
   * TODO Validations
   */
  create: [
    body('email').isEmail().normalizeEmail(),
    (req, res) => {
      console.log(req.body);
      const { name, email, role } = req.body;
      const user = new User({ name, email, role });
      user
        .save()
        .then(({ _id, name, email, role }) =>
          res.send({ _id, name, email, role })
        )
        .catch(
          (error) =>
            console.error(error) ||
            res.status(500).send({ error: error.message })
        );
    }
  ],
  /**
   * TODO Validations
   * TODO use upsert?
   */
  update: [
    filterBody,
    (req, res) => {
      const user = req.body;
      console.log('user', user);

      const { id } = req.params;

      /**
       * TODO Delete findById when fix it
       * https://github.com/Automattic/mongoose/issues/7654
       */
      User.findById(id).then((currentUser) => {
        console.log('currentUser', currentUser);
        const { created_at, updated_at } = currentUser;

        User.findOneAndReplace(
          { _id: id },
          { ...user, created_at, updated_at },
          {
            new: true,
            timestamps: false
          }
        )
          .then(
            (updatedUser) =>
              console.log('updatedUser', updatedUser) ||
              res.send(userDTO(updatedUser))
          )
          .catch(
            (error) =>
              console.error(error) ||
              res.status(500).send({ error: error.message })
          );
      });
    }
  ],
  /**
   * TODO Validations
   */
  patch: [
    filterBody,
    onlyNotEmpty,
    (req, res) => {
      const user = req.body;
      const { id } = req.params;
      const options = { new: true, omitUndefined: true, lean: true };
      User.findByIdAndUpdate(id, user, options)
        .then((updatedUser) => res.send(userDTO(updatedUser)))
        .catch(
          (error) =>
            console.error(error) ||
            res.status(500).send({ error: error.message })
        );
    }
  ],
  remove: (req, res) => {
    return User.findByIdAndDelete(req.params.id)
      .then((user) => (user ? res.send(userDTO(user)) : res.status(204).send()))
      .catch(
        (error) =>
          console.error(error) || res.status(500).send({ error: error.message })
      );
  }
};
