import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController';

routes.get('/', (req, res) => {
    return res.send('Hello Express (dev:server)');
});

routes.get('/users', UserController.index);
routes.get('/users/create', UserController.create);

export default routes;
