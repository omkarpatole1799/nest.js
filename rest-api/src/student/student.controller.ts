import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiResponse } from 'src/utils/ApiResponse';
import { StudentService } from './student.service';
import {
  AddNewStudentInterface,
  DeleteStudentInterface,
  UpdateStudentInterface,
} from './student.types';
import { CandidateService } from 'src/candidate/candidate.service';

@Controller('student')
export class StudentController {
  constructor(
    private readonly studentService: StudentService,
    private readonly candidateService: CandidateService,
  ) {}

  @Get()
  async getAllRegisteredStudents() {
    console.log(await this.candidateService.testAddingNewCandidate(), '----');

    const allStudents = await this.studentService.getAllRegisteredStudents();

    return new ApiResponse(200, true, 'All Student Details', allStudents).res();
  }

  @Get('/one')
  async getStudentById(@Query('id') studentId: string) {
    if (!studentId) throw new NotFoundException();
    return await this.studentService.getStudentById(studentId);
  }

  @Post()
  async addStudent(@Body('request_data') request_data: AddNewStudentInterface) {
    return await this.studentService.addNewStudent(request_data);
  }

  @Delete()
  async deleteStudent(
    @Body('request_data') request_data: DeleteStudentInterface,
  ) {
    return await this.studentService.deleteStudent(request_data.studentId);
  }

  @Patch()
  async updateStudent(
    @Body('request_data') request_data: UpdateStudentInterface,
  ) {
    return await this.studentService.updateStudent(request_data);
  }
}
