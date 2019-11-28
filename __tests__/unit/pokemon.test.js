import request from 'supertest';
import app from '../../src/app';
import factory from '../factories';
import '../../src/database/index';
import User from '../../src/app/schemas/User';

require('dotenv/config');

async function base() {
  const user = await factory.attrs('User');

  await request(app)
    .post('/user')
    .send(user);

  const session = await request(app)
    .post('/session')
    .send(user);

  const { token } = session.body;

  const name = 'pikachu';

  await request(app)
    .post(`/pokemon/${name}`)
    .set('Authorization', `Bearer ${token}`)
    .send(user);
}

describe('Favorites', () => {
  beforeEach(async () => {
    await User.deleteMany();
    base();
  });

  it('@index/Mostrar lista de pokemons favoritos', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const response = await request(app)
      .get('/pokemon')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it('@update/Usuário não atende aos requisitos do body', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    const response = await request(app)
      .put(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ nickname: 1 });

    expect(response.status).toBe(400);
  });

  it('@update/Erro ao enviar um numero no params invez de string', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 1;

    const response = await request(app)
      .put(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(response.status).toBe(400);
  });

  it('@update/Achar usuário pelo userId e name', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    const response = await request(app)
      .put(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(user);

    expect(response.status).toBe(200);
  });

  it('@update/Mensagem de erro ao não encontrar usuário pelo userId e name', async () => {
    const user = await factory.attrs('User');

    const createUser = await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    const response = await request(app)
      .put(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(createUser.body);

    expect(response.status).toBe(401);
  });

  it('@post/Erro ao enviar um numero no params invés de string', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 1;

    const response = await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(response.status).toBe(400);
  });

  it('@delete/Erro ao enviar um numero no params invés de string', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 1;

    const response = await request(app)
      .delete(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(response.status).toBe(400);
  });

  it('@delete/Achar usuário pelo userId e name', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    const response = await request(app)
      .delete(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(user);

    expect(response.status).toBe(200);
  });

  it('@delete/Mensagem de erro ao não encontrar usuário pelo userId e name', async () => {
    const user = await factory.attrs('User');

    const createUser = await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    const response = await request(app)
      .delete(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(createUser.body);

    expect(response.status).toBe(400);
  });

  it('@show/Erro ao enviar um numero no params invés de string', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 1;

    const response = await request(app)
      .get(`/pokemon/details/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    expect(response.status).toBe(400);
  });

  it('@show/Achar usuário pelo userId e name', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send();

    const response = await request(app)
      .get(`/pokemon/details/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(user);

    expect(response.status).toBe(200);
  });

  it('@post/Pokemon não existe', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pokemoninexistente';

    const response = await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(user);

    expect(response.status).toBe(404);
  });

  it('@post/Pokemon já cadastrado nos favoritos', async () => {
    const user = await factory.attrs('User');

    await request(app)
      .post('/user')
      .send(user);

    const session = await request(app)
      .post('/session')
      .send(user);

    const { token } = session.body;

    const name = 'pikachu';

    await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(user);

    const newResponse = await request(app)
      .post(`/pokemon/${name}`)
      .set('Authorization', `Bearer ${token}`)
      .send(user);
    expect(newResponse.status).toBe(401);
  });
});
