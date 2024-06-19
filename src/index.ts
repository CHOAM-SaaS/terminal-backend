import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3050;

app.use(
  bodyParser.json({
    verify: (req: Request, res: Response, buf: Buffer) => {
      (req as any).rawBody = buf;
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Welcome to C.H.O.A.M. Terminal. Carry on as we await the Lisan al Gaib.' });
});

// Route imports
import Jobs from './routes/jobs';
import Trades from './routes/trades';
import Guilds from './routes/guilds';

app.use('/jobs', Jobs);
app.use('/trades', Trades);
app.use('/guilds', Guilds);

app.listen(port, () => {
  console.log(`[Express] C.H.O.A.M. Terminal listening on port ${port}`);
});