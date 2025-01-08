import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollegePlacementServiceBase } from "./base/collegePlacement.service.base";

@Injectable()
export class CollegePlacementService extends CollegePlacementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
