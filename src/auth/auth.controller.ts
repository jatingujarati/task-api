import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User login' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'username' },
        password: { type: 'string', example: 'password' },
      },
      required: ['username', 'password'],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: { example: { message: 'Login successful' } },
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
    schema: { example: { message: 'Invalid credentials' } },
  })
  @Post('login')
  login(@Body() loginData: { username: string; password: string }) {
    if (this.authService.validateUser(loginData.username, loginData.password)) {
      return { message: 'Login successful' };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
