import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatesService } from "./states.service";
import { StatesControllerBase } from "./base/states.controller.base";

@swagger.ApiTags("states")
@common.Controller("states")
export class StatesController extends StatesControllerBase {
  constructor(protected readonly service: StatesService) {
    super(service);
  }
}
