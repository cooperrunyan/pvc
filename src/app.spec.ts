import 'jest';
import request from 'supertest';
import { app } from './app';

describe('Server', () => {
  it('Runs the server', async () => {
    await request(app).get('/ping').expect(200);
  });
});
