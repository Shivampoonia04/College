import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CitiesService } from "./cities.service";
import { CitiesControllerBase } from "./base/cities.controller.base";

@swagger.ApiTags("cities")
@common.Controller("cities")
export class CitiesController extends CitiesControllerBase {
  constructor(protected readonly service: CitiesService) {
    super(service);
  }
}
