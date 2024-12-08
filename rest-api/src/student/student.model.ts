import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  ub_first_name: {
    type: String,
    required: true,
  },
  ub_last_name: {
    type: String,
    required: true,
  },

  ub_aadhaar_number: {
    type: Number,
    required: true,
    length: 12,
  },
  ub_mobile_number: {
    type: Number,
    required: true,
  },
});

export interface StudentSchemaInterface {
  _id: string;
  ub_first_name: string;
  ub_middle_name: string;
  ub_mobile_number: number;
}
