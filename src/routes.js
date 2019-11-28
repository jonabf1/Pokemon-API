import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PokemonController from './app/controllers/PokemonController';
import authMiddleware from './app/middlewares/auth';
import existMiddleware from './app/middlewares/user';

const routes = new Router();

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware, existMiddleware);

routes.put('/user', UserController.update);

routes.get('/pokemon', PokemonController.index);
routes.get('/pokemon/details/:name', PokemonController.show);
routes.post('/pokemon/:name', PokemonController.store);
routes.put('/pokemon/:name', PokemonController.update);
routes.delete('/pokemon/:name', PokemonController.delete);

export default routes;
