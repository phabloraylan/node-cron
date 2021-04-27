import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';

import '@shared/index';
import configApp from '@config/app';
import registerJob from 'registerJob';

const app = express();

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    message: 'Internal server error',
  });
});

const appName = configApp.name;
const appPort = configApp.port;
const appEnvironment = configApp.environment;

app.listen(appPort, () => {
  console.log(
    `${appName} listening at port ${appPort} in ${appEnvironment} mode`,
  );

  registerJob();
});
