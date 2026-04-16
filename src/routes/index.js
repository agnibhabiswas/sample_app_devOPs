const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.sendFile(require('path').join(__dirname, '../../public/index.html'));
});

module.exports = router;