/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CollegeWiseCourse } from "./CollegeWiseCourse";
import { CollegeWiseCourseCountArgs } from "./CollegeWiseCourseCountArgs";
import { CollegeWiseCourseFindManyArgs } from "./CollegeWiseCourseFindManyArgs";
import { CollegeWiseCourseFindUniqueArgs } from "./CollegeWiseCourseFindUniqueArgs";
import { DeleteCollegeWiseCourseArgs } from "./DeleteCollegeWiseCourseArgs";
import { CollegeWiseCourseService } from "../collegeWiseCourse.service";
@graphql.Resolver(() => CollegeWiseCourse)
export class CollegeWiseCourseResolverBase {
  constructor(protected readonly service: CollegeWiseCourseService) {}

  async _collegeWiseCoursesMeta(
    @graphql.Args() args: CollegeWiseCourseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CollegeWiseCourse])
  async collegeWiseCourses(
    @graphql.Args() args: CollegeWiseCourseFindManyArgs
  ): Promise<CollegeWiseCourse[]> {
    return this.service.collegeWiseCourses(args);
  }

  @graphql.Query(() => CollegeWiseCourse, { nullable: true })
  async collegeWiseCourse(
    @graphql.Args() args: CollegeWiseCourseFindUniqueArgs
  ): Promise<CollegeWiseCourse | null> {
    const result = await this.service.collegeWiseCourse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CollegeWiseCourse)
  async deleteCollegeWiseCourse(
    @graphql.Args() args: DeleteCollegeWiseCourseArgs
  ): Promise<CollegeWiseCourse | null> {
    try {
      return await this.service.deleteCollegeWiseCourse(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
