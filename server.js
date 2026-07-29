const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'ISP Manager API is running!',
    endpoints: {
      test: '/test',
      login: '/api/auth/login',
      customers: '/api/customers'
    }
  });
});

module.exports = app;
