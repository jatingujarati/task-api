import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users = [{ username: 'username', password: 'password' }];

  validateUser(username: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    return !!user;
  }
}
