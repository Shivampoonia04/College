import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollegePlacementService } from "./collegePlacement.service";
import { CollegePlacementControllerBase } from "./base/collegePlacement.controller.base";

@swagger.ApiTags("collegePlacements")
@common.Controller("collegePlacements")
export class CollegePlacementController extends CollegePlacementControllerBase {
  constructor(protected readonly service: CollegePlacementService) {
    super(service);
  }
}
