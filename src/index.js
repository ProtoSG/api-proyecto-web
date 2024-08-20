const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
