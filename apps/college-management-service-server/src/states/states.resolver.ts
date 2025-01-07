import * as graphql from "@nestjs/graphql";
import { StatesResolverBase } from "./base/states.resolver.base";
import { States } from "./base/States";
import { StatesService } from "./states.service";

@graphql.Resolver(() => States)
export class StatesResolver extends StatesResolverBase {
  constructor(protected readonly service: StatesService) {
    super(service);
  }
}
