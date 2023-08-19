import express, { Application, NextFunction, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import notesRouter from './routes/noteRoute';
import authRouter from './routes/authRoute';
import { handleErrors } from './middleware/error';

// import helmet from 'helmet';

import cookieParser from 'cookie-parser';

const app: Application = express();

const whitelist = process.env.WHITELIST as string;

app.use(
  cors({
    origin: '*',
  })
);

// app.disable('x-powered-by');
// app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'running',
    message: 'Server is running !',
  });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/notes', notesRouter);
app.use((req, res, next) => {
  res.status(404).send('No route found!');
});

app.use(handleErrors);

export default app;
