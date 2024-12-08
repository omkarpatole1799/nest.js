import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SignupService } from './signup.service.js';
import { SignupRequestData } from './signup.types.js';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  async registerNewUser(@Body('request_data') request_data: SignupRequestData) {
    return await this.signupService.signupNewUser(request_data);
  }
}
