import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import { StudentSchema } from './student.model';
import { StudentService } from './student.service';
import { CandidateService } from 'src/candidate/candidate.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService, CandidateService],
})
export class StudentModule {}
