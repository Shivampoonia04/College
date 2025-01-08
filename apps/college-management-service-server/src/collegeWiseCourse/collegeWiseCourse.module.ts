import { Module } from "@nestjs/common";
import { CollegeWiseCourseModuleBase } from "./base/collegeWiseCourse.module.base";
import { CollegeWiseCourseService } from "./collegeWiseCourse.service";
import { CollegeWiseCourseController } from "./collegeWiseCourse.controller";
import { CollegeWiseCourseResolver } from "./collegeWiseCourse.resolver";

@Module({
  imports: [CollegeWiseCourseModuleBase],
  controllers: [CollegeWiseCourseController],
  providers: [CollegeWiseCourseService, CollegeWiseCourseResolver],
  exports: [CollegeWiseCourseService],
})
export class CollegeWiseCourseModule {}
