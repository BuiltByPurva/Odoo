const mongoose = require('mongoose');

/*
  NOTE: Switching to MySQL (high-level direction)
  - Replace Mongoose with an ORM like Sequelize or Prisma.
  - Example with Prisma:
    1) npm i prisma @prisma/client
    2) npx prisma init -> configure DATABASE_URL for MySQL
    3) Define User model in schema.prisma and run migrations
    4) Replace User model usages to Prisma client calls
*/
module.exports = async function connectDb() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('Missing MONGO_URI in .env');
    process.exit(1);
  }
  try {
    // Prefer IPv4 on Windows to avoid localhost/::1 issues; fail fast if unreachable
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      family: 4
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

