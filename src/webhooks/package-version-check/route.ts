import { Router } from 'express';
import { supabase } from '../../supabase';
import { z } from 'zod';
import { requestStructure } from './request-structure';

export const pvc = Router();

pvc.post('/', async (req, res) => {
  const isTest = process.env.NODE_ENV === 'test';

  let payload: z.infer<typeof requestStructure>;

  try {
    payload = requestStructure.parse(req.body);
  } catch (error) {
    return res.status(400).json({ error });
  }

  const { data, error } = await supabase.from('institutions').upsert(payload);

  if (error?.code === '23505') {
    const { data, error } = await supabase
      .from('institutions')
      .update({ ...payload })
      .match({ orgId: payload.orgId });

    if (error) console.error(error);

    return res.status(200).json({ data });
  }

  if (error) console.error(error);

  res.status(200).json({ data });
});
