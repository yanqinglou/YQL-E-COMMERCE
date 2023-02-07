require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

//reques sent in a json format
app.use(express.json());
//for encoded data
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(function() {
  app.listen(PORT, function() {
      console.log('App listening on PORT ' + PORT);
  });
});

