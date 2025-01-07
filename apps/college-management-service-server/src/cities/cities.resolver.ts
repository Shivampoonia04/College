import * as graphql from "@nestjs/graphql";
import { CitiesResolverBase } from "./base/cities.resolver.base";
import { Cities } from "./base/Cities";
import { CitiesService } from "./cities.service";

@graphql.Resolver(() => Cities)
export class CitiesResolver extends CitiesResolverBase {
  constructor(protected readonly service: CitiesService) {
    super(service);
  }
}
