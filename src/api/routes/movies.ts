import { Router } from 'express';
const helmet = require('helmet');

const MovieController = require('../controllers/movies');
export const movieRouter = Router();
// movieRouter.use(helmet.hidePoweredBy({ setTo: 'Blood, Sweat and Tears' }));


movieRouter.get('/', MovieController.getMovies);