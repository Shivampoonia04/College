import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CitiesServiceBase } from "./base/cities.service.base";

@Injectable()
export class CitiesService extends CitiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
