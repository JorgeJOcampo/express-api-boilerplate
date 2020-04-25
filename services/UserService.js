module.exports = {
  sanitizers: [],
  validators: [],
  onlyNotEmpty: (req, res, next) => {
    Object.keys(req.body).forEach((prop) => {
      if (!req.body[prop]) delete req.body[prop];
    });
    console.log('req.body only', req.body);
    next();
  },
  /**
   * Filter only the attributes that you want to save on DB
   * and put into req.body
   */
  filterBody: (req, res, next) => {
    /**
     * TODO Get props from Schema
     */
    const validProps = ['name', 'email', 'role'];

    const { name, email, role } = req.body;
    console.log('{ name, email, role }', { name, email, role });
    req.body = { name, email, role };

    // Object.keys(req.body).forEach((prop) => {
    //   console.log('req.body[prop]', req.body[prop]);
    //   if (!validProps.includes(prop)) delete req.body[prop];
    // });
    next();
  }
};
