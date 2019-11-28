import request from 'supertest';
import app from '../../src/app';
import factory from '../factories';
import '../../src/database/index';
import User from '../../src/app/schemas/User';

require('dotenv/config');

describe('Session', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  it('@update/Verificar caso o mesmo email tente ser utilizado', async () => {
    const user = await factory.attrs('User');
    const { email } = user;

    const userCreated = await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { _id } = userCreated.body;
    const { token } = session.body;

    const response = await request(app)
      .put('/user')
      .set('Authorization', `Bearer ${token}`)
      .send({ email, idTest: _id });
    expect(response.status).toBe(401);
  });

  it('@post/Usuário atende aos requisitos do body e pode se cadastrar', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const response = await request(app)
      .post('/session')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('@post/Usuário não atende aos requisitos do body', async () => {
    await request(app)
      .post('/user')
      .send({ email: 'emailteste@gmail.com' });

    const response = await request(app)
      .post('/session')
      .send({ email: 'emailteste@gmail.com' });

    expect(response.status).toBe(400);
  });

  it('@post/Usuário não existe pelo email', async () => {
    const user = await factory.attrs('User');

    const { name, password } = user;

    await request(app)
      .post('/user')
      .send(user);

    const response = await request(app)
      .post('/session')
      .send({ name, password, email: 'newemail@gmail.com' });

    expect(response.status).toBe(401);
  });

  it('@post/Verificar se as senhas do body e banco de dados correspondem', async () => {
    const user = await factory.attrs('User');

    const { name, email, password } = user;

    await request(app)
      .post('/user')
      .send(user);

    const response = await request(app)
      .post('/session')
      .send({ name, password, email });

    expect(response.status).toBe(200);
  });

  it('@post/Verificar se as senhas do body e banco de dados NÃO correspondem', async () => {
    const user = await factory.attrs('User');

    const userCreated = await request(app)
      .post('/user')
      .send(user);

    const { _id, email } = userCreated.body;

    const session = await request(app)
      .post('/session')
      .send({ password: '12345678910', email, idTest: _id });
    expect(session.status).toBe(401);
  });

  it('@post/Verificar se é gerado um Token', async () => {
    const user = await factory.attrs('User');
    const createdUser = await request(app)
      .post('/user')
      .send(user);

    const response = await request(app)
      .post('/session')
      .send(createdUser.body);

    const { token } = response.text;
    expect(token !== '').toBe(true);
  });
});
