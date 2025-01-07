import * as graphql from "@nestjs/graphql";
import { CollegesResolverBase } from "./base/colleges.resolver.base";
import { Colleges } from "./base/Colleges";
import { CollegesService } from "./colleges.service";

@graphql.Resolver(() => Colleges)
export class CollegesResolver extends CollegesResolverBase {
  constructor(protected readonly service: CollegesService) {
    super(service);
  }
}
