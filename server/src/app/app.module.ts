import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { ScheduleDatabaseResetService } from './core/services/schedule-database-reset.service';
import { EmployeeSalariesModule } from './employee-salaries/employee-salaries.module';
import { EmployeeModule } from './employee/employee.module';
import { SalaryModule } from './salary/salary.module';
export const productionMongoURI =
  'mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
export const localMongoURI = 'mongodb://localhost:27017/employeeManagement';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      context: ({ req }) => ({ req }),
    }),
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot(localMongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    ScheduleModule.forRoot(),
    EmployeeModule,
    SalaryModule,
    EmployeeSalariesModule,
    AuthModule,
    ScheduleDatabaseResetService,
  ],
})
export class AppModule {}
