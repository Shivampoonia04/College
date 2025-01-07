/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  CollegeWiseCourse as PrismaCollegeWiseCourse,
} from "@prisma/client";

export class CollegeWiseCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CollegeWiseCourseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.collegeWiseCourse.count(args);
  }

  async collegeWiseCourses(
    args: Prisma.CollegeWiseCourseFindManyArgs
  ): Promise<PrismaCollegeWiseCourse[]> {
    return this.prisma.collegeWiseCourse.findMany(args);
  }
  async collegeWiseCourse(
    args: Prisma.CollegeWiseCourseFindUniqueArgs
  ): Promise<PrismaCollegeWiseCourse | null> {
    return this.prisma.collegeWiseCourse.findUnique(args);
  }
  async createCollegeWiseCourse(
    args: Prisma.CollegeWiseCourseCreateArgs
  ): Promise<PrismaCollegeWiseCourse> {
    return this.prisma.collegeWiseCourse.create(args);
  }
  async updateCollegeWiseCourse(
    args: Prisma.CollegeWiseCourseUpdateArgs
  ): Promise<PrismaCollegeWiseCourse> {
    return this.prisma.collegeWiseCourse.update(args);
  }
  async deleteCollegeWiseCourse(
    args: Prisma.CollegeWiseCourseDeleteArgs
  ): Promise<PrismaCollegeWiseCourse> {
    return this.prisma.collegeWiseCourse.delete(args);
  }
}