const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  'https://vercel.com/lasirus-projects/country-explorer',
  'http://localhost:5173',  
  
];


app.use(cors());
app.use(express.json());


// CORS middleware configuration
app.use(
  cors({
    origin: function (origin, callback) {
      
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('The CORS policy for this site does not allow access from the specified origin.'));
      }
    }
  })
);


// Set up Helmet for Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "https://vercel.live"], // Allow scripts from vercel.live
      "default-src": ["'self'"],
    },
  })
);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API WORKING');
});





const favoriteRoutes = require("./routes/favoriteRoutes");
app.use("/api/favorites", favoriteRoutes);

const PORT = process.env.PORT || 5000;

// Only start the server if this file is run directly (not imported for testing)
if (require.main === module) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("DB connection error:", err));
}

module.exports = app;
