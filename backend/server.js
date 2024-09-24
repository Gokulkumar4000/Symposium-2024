// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Allow CORS for Next.js frontend
app.use(express.json());

// Generate UPI link dynamically and send it to the frontend
app.post('/generate-upi-link', (req, res) => {
  const { amount } = req.body;

  const upiId = 'jmahagurunath2004@okicici';
  const name = 'Gokul';
  const lockedAmount = '1.00'; // Locked amount

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${lockedAmount}&cu=INR&tn=Event+Registration+Fees`;
  res.json({ upiLink });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
