import express from 'express';
import { config } from 'dotenv';

const app = express();
config();

app.use(express.json());
app.get('/ping', async (req, res) => res.send('pong'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
