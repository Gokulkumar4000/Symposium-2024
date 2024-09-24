const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Your UPI link generation endpoint
app.post('/generate-upi-link', (req, res) => {
  const { amount } = req.body;

  const upiId = 'jmahagurunath2004@okicici';
  const name = 'Gokul';
  const lockedAmount = '1.00'; // Locked amount

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${lockedAmount}&cu=INR&tn=Event+Registration+Fees`;
  res.json({ upiLink });
});

// Use the PORT environment variable or default to 5000 if not set
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
