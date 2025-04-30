import express from 'express';
const app = express();
import { port } from './config/config.js';
import router from './routes/api.js';


app.use('/', router)

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
