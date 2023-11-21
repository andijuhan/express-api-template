const createTodoValidator = (req, res, next) => {
   if (!req.body.text) {
      return res.status(400).json({
         error: 'Text is required',
      });
   }
   next();
};

module.exports = createTodoValidator;
