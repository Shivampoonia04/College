import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollegeWiseCourseService } from "./collegeWiseCourse.service";
import { CollegeWiseCourseControllerBase } from "./base/collegeWiseCourse.controller.base";

@swagger.ApiTags("collegeWiseCourses")
@common.Controller("collegeWiseCourses")
export class CollegeWiseCourseController extends CollegeWiseCourseControllerBase {
  constructor(protected readonly service: CollegeWiseCourseService) {
    super(service);
  }
}
