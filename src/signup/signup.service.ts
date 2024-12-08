import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupSchemaInterface } from './signup.schema';
import { SignupRequestData } from './signup.types';
import { ApiResponse } from 'src/utils/ApiResponse';
import { OtpSchemaInterface } from 'src/otp/otp.schema';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel('signup')
    private signupModel: Model<SignupSchemaInterface>,

    @InjectModel('otp') private otpModel: Model<OtpSchemaInterface>,
  ) {}

  async signupNewUser(request_data: SignupRequestData) {
    try {
      const user = await this.signupModel.findOne({
        mobile: request_data.mobile,
      });
      if (user) {
        return new ApiResponse(409, false, 'Mobile already exsists').res();
      }
      const newUser = await new this.signupModel(request_data);
      const result = await newUser.save();

      return new ApiResponse(201, true, 'Successfully created user.', [
        result,
      ]).res();
    } catch (error) {
      console.log(error, '==error==');
    }
  }
}
