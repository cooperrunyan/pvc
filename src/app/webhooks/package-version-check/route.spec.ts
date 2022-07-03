import 'jest';

import express from 'express';
import request from 'supertest';

import { pvc } from './route.js';

describe('Package Version Check', () => {
  const app = request(express().use('/', pvc));

  it('Sends successfully', async () => {
    await app.get('/ping').expect(200);
  });
});
