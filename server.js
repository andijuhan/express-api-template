const app = require('./app');

const PORT = process.env.PORT || 3001;

//connect to database server, etc

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
