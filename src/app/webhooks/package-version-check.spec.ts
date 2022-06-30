import 'jest';

import express from 'express';
import assert from 'assert';
import request from 'supertest';

import { pvc } from './package-version-check';

describe('Package Version Check', () => {
  const app = request(express().use('/', pvc));

  it('Sends successfully', async () => {
    const res = await app.post('/');
    assert.equal(res.status, 200);
  });
});
