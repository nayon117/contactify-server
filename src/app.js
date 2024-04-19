const express = require('express');
require("dotenv").config();
const app = express();

const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB.JS');
const contactRoutes = require('./routes/contacts/index');
const cartRoutes = require('./routes/carts/index');

// middleware
applyMiddleware(app);

// connect to mongodb database
connectDB();

// routes
app.use(contactRoutes)
app.use(cartRoutes)

// server starting point
app.get("/", (req, res) => {
    res.send("contactify server is running");
  });
  
  app.all("*",  (req, res,next) => {
      const error = new Error(`The requested url is invalid: [${req.url}] `)
      error.status = 404
      next(error)
  })
  
  app.use((err, req, res, next) => {
      res.status(err.status || 500).json({
          message: err.message
      })
  })
  
  // Define the port
  const PORT = process.env.PORT || 5000;
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`contactify server is running on port ${PORT}`);
  });
