import express, { Express, Request, Response } from 'express';
import { render } from './render';
import { config } from './config';

const app: Express = express();

app.use(express.static('dist'));

app.get('*', (req: Request, res: Response) => {
  res.send(render(req.url));
});

app.listen(config.PORT, () => {
  console.log(`Listening in http://localhost:${config.PORT}`);
});
