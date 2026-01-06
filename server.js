const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Handle Synchronous Errors
process.on('uncaughtException', (err) => {
  console.log('💥 UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Load environment variables
dotenv.config({ path: './config.env' });

const app = require('./app');

// Replace password placeholder in connection string
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// Connect to MongoDB
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('✅ DB connection successful!'))
  .catch((err) => {
    console.error('❌ DB connection error:', err);
    process.exit(1); // stops the app gracefully
  });

// Start Server
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`🚀 App running on port ${port}...`);
});

// Handle Asynchronous Errors (e.g., rejected promises)
process.on('unhandledRejection', (err) => {
  console.log('💥 UNHANDLED REJECTION! Shutting down...');
  console.log(err.name, err.message);
  console.log(err.stack);
  server.close(() => {
    process.exit(1);
  });
});
