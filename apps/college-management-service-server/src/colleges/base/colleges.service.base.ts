/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Colleges as PrismaColleges } from "@prisma/client";

export class CollegesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CollegesCountArgs, "select">): Promise<number> {
    return this.prisma.colleges.count(args);
  }

  async collegesItems(
    args: Prisma.CollegesFindManyArgs
  ): Promise<PrismaColleges[]> {
    return this.prisma.colleges.findMany(args);
  }
  async colleges(
    args: Prisma.CollegesFindUniqueArgs
  ): Promise<PrismaColleges | null> {
    return this.prisma.colleges.findUnique(args);
  }
  async createColleges(
    args: Prisma.CollegesCreateArgs
  ): Promise<PrismaColleges> {
    return this.prisma.colleges.create(args);
  }
  async updateColleges(
    args: Prisma.CollegesUpdateArgs
  ): Promise<PrismaColleges> {
    return this.prisma.colleges.update(args);
  }
  async deleteColleges(
    args: Prisma.CollegesDeleteArgs
  ): Promise<PrismaColleges> {
    return this.prisma.colleges.delete(args);
  }
}
