// src/express.d.ts
import * as Express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // You can specify a more specific type based on your user object
    }
  }
}
