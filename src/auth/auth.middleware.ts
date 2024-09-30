import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.headers;
    if (this.authService.validateUser(username as string, password as string)) {
      next();
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  }
}
