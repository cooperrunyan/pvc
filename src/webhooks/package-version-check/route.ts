import { Router } from 'express';
import { z } from 'zod';
import { requestStructure } from './request-structure';

export const pvc = Router();

pvc.post('/', async (req, res) => {
  const isTest = process.env.NODE_ENV === 'test';
  const data = req.body;

  let payload: z.infer<typeof requestStructure>;

  try {
    payload = requestStructure.parse(data);
  } catch (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json(payload);
});
