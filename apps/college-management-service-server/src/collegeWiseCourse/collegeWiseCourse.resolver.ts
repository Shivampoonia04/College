import * as graphql from "@nestjs/graphql";
import { CollegeWiseCourseResolverBase } from "./base/collegeWiseCourse.resolver.base";
import { CollegeWiseCourse } from "./base/CollegeWiseCourse";
import { CollegeWiseCourseService } from "./collegeWiseCourse.service";

@graphql.Resolver(() => CollegeWiseCourse)
export class CollegeWiseCourseResolver extends CollegeWiseCourseResolverBase {
  constructor(protected readonly service: CollegeWiseCourseService) {
    super(service);
  }
}
