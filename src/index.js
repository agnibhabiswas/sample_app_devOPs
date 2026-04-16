require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`[${process.env.NODE_ENV || 'development'}] Server running on port ${PORT}`);
});
