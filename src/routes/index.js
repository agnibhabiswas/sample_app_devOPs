const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    app: process.env.APP_NAME || 'sample-app',
    version: require('../../package.json').version,
    message: 'Welcome to the Sample App',
  });
});

// Health check — used by AWS ELB / ECS health checks
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;
