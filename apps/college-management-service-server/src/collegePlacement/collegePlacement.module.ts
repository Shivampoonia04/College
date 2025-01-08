import { Module } from "@nestjs/common";
import { CollegePlacementModuleBase } from "./base/collegePlacement.module.base";
import { CollegePlacementService } from "./collegePlacement.service";
import { CollegePlacementController } from "./collegePlacement.controller";
import { CollegePlacementResolver } from "./collegePlacement.resolver";

@Module({
  imports: [CollegePlacementModuleBase],
  controllers: [CollegePlacementController],
  providers: [CollegePlacementService, CollegePlacementResolver],
  exports: [CollegePlacementService],
})
export class CollegePlacementModule {}
