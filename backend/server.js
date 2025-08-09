require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());

// Connect DB first, then start the server
connectDb()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`API listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect DB:', err);
    process.exit(1);
  });

app.get('/health', (req, res) => res.json({ ok: true }));

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Server Error' });
});

// app.listen is started after DB connection above

