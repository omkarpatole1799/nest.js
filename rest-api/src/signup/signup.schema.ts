import * as mongoose from 'mongoose';

export const SignupSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
});

export interface SignupSchemaInterface {
  full_name: string;
  mobile: string;
  email: string;
  password: string;
}
