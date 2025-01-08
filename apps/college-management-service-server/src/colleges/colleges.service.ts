import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollegesServiceBase } from "./base/colleges.service.base";

@Injectable()
export class CollegesService extends CollegesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
