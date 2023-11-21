const getTodos = (req, res) => {
   return res.status(200).json({
      data: [
         {
            id: 1,
            text: 'Todo 1',
         },
         {
            id: 2,
            text: 'Todo 2',
         },
      ],
   });
};
const createTodo = (req, res) => {
   //save to database
   return res.status(200).json({
      data: req.body,
   });
};

const updateTodo = (req, res) => {
   return res.status(200).json({
      data: req.body,
   });
};

module.exports = {
   getTodos,
   createTodo,
   updateTodo,
};
