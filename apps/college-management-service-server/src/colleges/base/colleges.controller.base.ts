/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CollegesService } from "../colleges.service";
import { CollegesCreateInput } from "./CollegesCreateInput";
import { Colleges } from "./Colleges";
import { CollegesFindManyArgs } from "./CollegesFindManyArgs";
import { CollegesWhereUniqueInput } from "./CollegesWhereUniqueInput";
import { CollegesUpdateInput } from "./CollegesUpdateInput";

export class CollegesControllerBase {
  constructor(protected readonly service: CollegesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Colleges })
  async createColleges(
    @common.Body() data: CollegesCreateInput
  ): Promise<Colleges> {
    return await this.service.createColleges({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Colleges] })
  @ApiNestedQuery(CollegesFindManyArgs)
  async collegesItems(@common.Req() request: Request): Promise<Colleges[]> {
    const args = plainToClass(CollegesFindManyArgs, request.query);
    return this.service.collegesItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Colleges })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async colleges(
    @common.Param() params: CollegesWhereUniqueInput
  ): Promise<Colleges | null> {
    const result = await this.service.colleges({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Colleges })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateColleges(
    @common.Param() params: CollegesWhereUniqueInput,
    @common.Body() data: CollegesUpdateInput
  ): Promise<Colleges | null> {
    try {
      return await this.service.updateColleges({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Colleges })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteColleges(
    @common.Param() params: CollegesWhereUniqueInput
  ): Promise<Colleges | null> {
    try {
      return await this.service.deleteColleges({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
