import express from 'express';
import { pvc } from './webhooks/package-version-check/route';

export const app = express();

app.use(express.json());
app.get('/ping', async (req, res) => res.status(200).send('pong'));
app.use(pvc);
