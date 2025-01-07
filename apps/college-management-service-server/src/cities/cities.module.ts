import { Module } from "@nestjs/common";
import { CitiesModuleBase } from "./base/cities.module.base";
import { CitiesService } from "./cities.service";
import { CitiesController } from "./cities.controller";
import { CitiesResolver } from "./cities.resolver";

@Module({
  imports: [CitiesModuleBase],
  controllers: [CitiesController],
  providers: [CitiesService, CitiesResolver],
  exports: [CitiesService],
})
export class CitiesModule {}
