import express from 'express';
import axios from 'axios';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname));
app.get("/", (_req, res) => res.sendFile(__dirname + "/index.html"));
app.use(express.json());

app.get('/api/myai', async (_req, res) => {
  const response = (await axios.get("https://lianeapi.onrender.com/api/myai?type=mapped")).data;
  res.json(response);
});

app.listen(6969, () => console.log(`Server opened on port 6969`));
