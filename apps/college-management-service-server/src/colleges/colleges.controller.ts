import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CollegesService } from "./colleges.service";
import { CollegesControllerBase } from "./base/colleges.controller.base";

@swagger.ApiTags("colleges")
@common.Controller("colleges")
export class CollegesController extends CollegesControllerBase {
  constructor(protected readonly service: CollegesService) {
    super(service);
  }
}
