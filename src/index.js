// Import required packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// Use referral routes
app.use('/api/referrals', referralRoutes);

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
