import express, { Request, Response } from 'express';

export const app = express();
app.use(express.json());

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});
