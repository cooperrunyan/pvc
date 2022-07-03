import { Router } from 'express';
import { requestStructure } from './request-structure.js';

export const pvc = Router();

pvc.post('/', async (req, res) => {
  const isTest = process.env.NODE_ENV === 'test';

  try {
    const payload = requestStructure.parse(req.body);
    console.log(payload);

    res.status(200).json(payload);
  } catch (error) {
    res.status(400).json({ error });
  }
});
