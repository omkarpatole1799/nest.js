import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupSchema } from './signup.schema';
import { OtpSchema } from 'src/otp/otp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'signup',
        schema: SignupSchema,
      },
      {
        name: 'otp',
        schema: OtpSchema
      }
    ]),

    
  ],
  providers: [SignupService],
  exports: [SignupService]
})
export class SignupModule {}
