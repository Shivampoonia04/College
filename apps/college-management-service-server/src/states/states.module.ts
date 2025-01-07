import { Module } from "@nestjs/common";
import { StatesModuleBase } from "./base/states.module.base";
import { StatesService } from "./states.service";
import { StatesController } from "./states.controller";
import { StatesResolver } from "./states.resolver";

@Module({
  imports: [StatesModuleBase],
  controllers: [StatesController],
  providers: [StatesService, StatesResolver],
  exports: [StatesService],
})
export class StatesModule {}
