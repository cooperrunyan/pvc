import { Router } from 'express';

export const pvc = Router();

pvc.post('/', async (req, res) => {
  const isTest = process.env.NODE_ENV === 'test';

  res.status(200).json({
    message: 'received',
  });
});
