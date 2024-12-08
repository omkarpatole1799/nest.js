import * as mongoose from 'mongoose';

export const OtpSchema = new mongoose.Schema({
  otp: {
    type: Number,
    require: true,
  },
  otp_for: {
    type: String,
    require: true,
  },
  otp_generated_by: {
    type: String,
    require: true,
  },
});

export interface OtpSchemaInterface {
  otp: number;
  otp_for: string;
  otp_generated_by: string;
}
