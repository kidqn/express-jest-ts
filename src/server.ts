import * as express from 'express';
import { Request, Response } from 'express';
import api from './api';
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const { 
  PORT = 3000
} = process.env;

 app.use(compression()); //Compress all routes
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use('/api/v1', api);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
}

export default app;
