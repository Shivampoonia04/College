import * as graphql from "@nestjs/graphql";
import { CollegePlacementResolverBase } from "./base/collegePlacement.resolver.base";
import { CollegePlacement } from "./base/CollegePlacement";
import { CollegePlacementService } from "./collegePlacement.service";

@graphql.Resolver(() => CollegePlacement)
export class CollegePlacementResolver extends CollegePlacementResolverBase {
  constructor(protected readonly service: CollegePlacementService) {
    super(service);
  }
}
