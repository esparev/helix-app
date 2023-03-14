import express, { Express, Request, Response } from 'express';
import { template } from './render/template';
import { config } from './config';

const app: Express = express();

app.get('*', (req: Request, res: Response) => {
  res.send(template(`<h1>${req.url}</h1>`));
});

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
});
