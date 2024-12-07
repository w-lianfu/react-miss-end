import express from 'express';
import fs from 'fs';
import path from 'path';
import https from 'https';

const app = express();
const PORT = 5000;

const options = {
  key: fs.readFileSync(path.join(__dirname, 'public', 'lovekeqi.com.key')),
  cert: fs.readFileSync(path.join(__dirname, 'public', 'lovekeqi.com_public.crt')),
};

const server = https.createServer(options, app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Express with TypeScript server running: http://localhost:${PORT}`);
});
