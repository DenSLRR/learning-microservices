import { Body, Controller, Post } from '@nestjs/common';
import { AccountLogin, AccountRegister } from '@purple/contracts';

export class RegisterDto {
  email: string;
  password: string;
  displayName: string;
}

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('register')
  async register(@Body() dto: AccountRegister.Request) {}

  @Post('login')
  async login(@Body() { password, email }: AccountLogin.Request) {}
}
