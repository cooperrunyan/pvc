import express from 'express';

export const app = express();

app.use(express.json());
app.get('/ping', async (req, res) => res.status(200).send('pong'));
