import express from 'express';

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static("images"));

app.listen(PORT, () => {
  console.log(`Express with TypeScript running: http://localhost:${PORT}`);
});
