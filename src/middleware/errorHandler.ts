import { Request, Response, NextFunction } from 'express';

export function notFoundHandler(req: Request, res: Response) {
  return res.status(404).json({ success: false, error: 'Not Found' });
}

export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  console.error('Unhandled error:', err);
  return res.status(500).json({ success: false, error: 'Internal Server Error' });
}
