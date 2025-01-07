import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatesServiceBase } from "./base/states.service.base";

@Injectable()
export class StatesService extends StatesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
