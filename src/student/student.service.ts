import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentSchemaInterface } from './student.model';
import {
  AddNewStudentInterface,
  UpdateStudentInterface,
} from './student.types';
import { ApiResponse } from 'src/utils/ApiResponse';
@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student')
    private readonly studentModel: Model<StudentSchemaInterface>,
  ) {}

  async addNewStudent(request_data: AddNewStudentInterface) {
    const isAadhaarExsits = await this.studentModel
      .findOne({
        ub_aadhaar_number: request_data.ub_aadhaar_number,
      })
      .exec();
    if (isAadhaarExsits?._id) {
      return new ApiResponse(409, true, 'Aadhaar already exsists');
    }

    const newStudent = new this.studentModel(request_data);

    const result = await newStudent.save();
    return new ApiResponse(200, true, 'Successfully Registered New User', [
      result,
    ]).res();
  }

  async getAllRegisteredStudents() {
    return await this.studentModel.find();
  }

  async getStudentById(studentId: string) {
    try {
      const studentDetails = await this.studentModel
        .findById(studentId, { __v: 0 })
        .exec();

      if (!studentDetails) {
        const resp = new ApiResponse(200, true, 'No Details Found.').res();
        console.log(resp, '==resp==');
      } else {
        return new ApiResponse(200, true, 'Student Details.', [
          studentDetails,
        ]).res();
      }
    } catch (error) {
      throw new NotFoundException('Student not available.');
    }
  }

  async deleteStudent(studentId: number) {
    try {
      const student = await this.studentModel.findById(studentId).exec();
      if (!student) return new ApiResponse(404, false, 'Student not found.');

      const deleteResult = await student.deleteOne().exec();

      if (deleteResult.deletedCount == 1) {
        return new ApiResponse(
          200,
          true,
          'Successfully Deleted Student.',
        ).res();
      } else {
        return new ApiResponse(404, false, 'Student not found.').res();
      }
    } catch (error) {
      throw new NotFoundException('Unable to delete student.');
    }
  }

  async updateStudent(request_data: UpdateStudentInterface) {
    try {
      await this.studentModel.updateOne(
        { _id: request_data.id },
        {
          $set: {
            ub_first_name: request_data.ub_first_name,
            ub_middle_name: request_data.ub_middle_name,
            ub_last_name: request_data.ub_last_name,
            ub_mobile_number: request_data.ub_mobile_number,
            ub_alternate_number: request_data.ub_alternate_number,
            ub_aadhaar_number: request_data.ub_aadhaar_number,
            ub_email_id: request_data.ub_email_id,
          },
        },
      );

      return new ApiResponse(
        200,
        true,
        'Successfully updated student details.',
      ).res();
    } catch (error) {
      throw new NotFoundException('Unable to update student.');
    }
  }
}
