import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollegeWiseCourseServiceBase } from "./base/collegeWiseCourse.service.base";

@Injectable()
export class CollegeWiseCourseService extends CollegeWiseCourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
