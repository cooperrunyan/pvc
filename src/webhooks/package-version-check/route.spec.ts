import 'jest';

import express from 'express';
import request from 'supertest';

import { pvc } from './route';

import { success } from './request-structure';
import { fail } from './request-structure';

describe('Package Version Check', () => {
  const app = express();

  app.use(express.json());
  app.use('/', pvc);

  it('Sends successfully', async () => {
    await request(app).post('/').send(success).expect(200);
  });

  it('Fails', async () => {
    await request(app).post('/').send(fail).expect(400);
  });
});
