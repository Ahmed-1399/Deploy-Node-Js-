import express from 'express'
import os from 'os'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // use ` ` --> ذ
  res.send(`Hello World, Iam a Pod ${os.hostname()}!`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(os.hostname())
});