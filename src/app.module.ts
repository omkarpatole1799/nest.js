import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module.js';
import { SignupController } from './signup/signup.controller.js';
import { SignupModule } from './signup/signup.module.js';

@Module({
  imports: [
    StudentModule,
    SignupModule,
    MongooseModule.forRoot(
      'mongodb+srv://omkarpatole1799:5555@cluster0.22ey9.mongodb.net/nestjs-rest?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [SignupController],
  providers: [],
})
export class AppModule {}
