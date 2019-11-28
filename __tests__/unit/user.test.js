import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../src/app';
import factory from '../factories';
import '../../src/database/index';
import User from '../../src/app/schemas/User';

require('dotenv/config');

describe('User', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  it('@post/Usuário atende aos requisitos do body e pode se cadastrar', async () => {
    const user = await factory.attrs('User');

    const response = await request(app)
      .post('/user')
      .send(user);

    expect(response.status).toBe(200);
  });

  it('@post/Usuário não atende aos requisitos do body', async () => {
    const response = await request(app)
      .post('/user')
      .send({ email: 'emailteste@gmail.com' });

    expect(response.status).toBe(400);
  });

  it('@post/Usuário não pode se registrar pois email já é utilizado', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const newReponse = await request(app)
      .post('/user')
      .send(user);

    expect(newReponse.status).toBe(400);
  });

  it('@post/Verificar se a senha está sendo encriptada ao criar um novo usuário', async () => {
    const user = await factory.attrs('User', { password: '123213ssd29djasd9' });

    const response = await request(app)
      .post('/user')
      .send(user);

    const compareHash = await bcrypt.compare(
      user.password,
      response.body.password
    );

    expect(compareHash).toBe(true);
  });

  it('@post/Verificar se o usuário já existe pelo email', async () => {
    const user = await factory.attrs('User');
    await request(app)
      .post('/user')
      .send(user);

    const newResponseToTest = await request(app)
      .post(`/user`)
      .send(user);
    expect(newResponseToTest.status).toBe(400);
  });

  it('@update/Usuário não atende aos requisitos do body', async () => {
    const userBase = await factory.attrs('User');
    await request(app)
      .post('/user')
      .send(userBase);

    const session = await request(app)
      .post('/session')
      .send(userBase);

    const { token } = session.body;

    const response = await request(app)
      .put('/user')
      .set('Authorization', `Bearer ${token}`)
      .send({ password: 1 });

    expect(response.status).toBe(400);
  });

  it('@update/Usuário ja existe pelo id', async () => {
    const user = await factory.attrs('User');
    const userCreated = await request(app)
      .post('/user')
      .send(user);

    const { _id } = userCreated.body;

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const response = await request(app)
      .put('/user')
      .set('Authorization', `Bearer ${token}`)
      .send({ idTest: _id });
    expect(response.status).toBe(200);
  });

  it('@update/Usuário não existe pelo id', async () => {
    const user = await factory.attrs('User');
    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const response = await request(app)
      .put('/user')
      .set('Authorization', `Bearer ${token}`)
      .send({
        idTest: '5dde4d09b9456904c95372c4',
      });

    expect(response.status).toBe(400);
  });

  it('@update/Comparar se a senha do body é igual a salva no banco de dados', async () => {
    const user = await factory.attrs('User');
    const { password } = user;

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
      .send({ password, idTest: _id });

    expect(response.status).toBe(200);
  });

  it('@update/Verificar se a senha do banco e do body correspondem', async () => {
    const user = await factory.attrs('User');

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
      .send({ password: '12345678910', idTest: _id });

    expect(response.status).toBe(401);
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
});
