import request from 'supertest';
import app from '../../src/app';
import '../../src/database/index';
import User from '../../src/app/schemas/User';

require('dotenv/config');

describe('Middleware', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  it('@auth/Token não é valido', async () => {
    const response = await request(app)
      .get('/pokemon')
      .set('Authorization', `Bearer ${'123'}`);

    expect(response.status).toBe(401);
  });

  it('@auth/Token não fornecido', async () => {
    const response = await request(app).get('/pokemon');
    expect(response.status).toBe(401);
  });

  it('@user/Usuário não está autorizado', async () => {
    // token real de um usuário que não existe
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZGVkNTliNjNkMjExMTcyYWJhMDRiYiIsImlhdCI6MTU3NDg4NDc3MSwiZXhwIjoxNTc1NDg5NTcxfQ.tYtfDwfeVowgbzG3kM-DVF0l7EpVbXDHc4LAz1Rilk8';

    const response = await request(app)
      .get('/pokemon')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(401);
  });
});
