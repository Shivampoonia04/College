import { Module } from "@nestjs/common";
import { CollegesModuleBase } from "./base/colleges.module.base";
import { CollegesService } from "./colleges.service";
import { CollegesController } from "./colleges.controller";
import { CollegesResolver } from "./colleges.resolver";

@Module({
  imports: [CollegesModuleBase],
  controllers: [CollegesController],
  providers: [CollegesService, CollegesResolver],
  exports: [CollegesService],
})
export class CollegesModule {}
