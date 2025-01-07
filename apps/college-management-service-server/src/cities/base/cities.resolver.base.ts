/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Cities } from "./Cities";
import { CitiesCountArgs } from "./CitiesCountArgs";
import { CitiesFindManyArgs } from "./CitiesFindManyArgs";
import { CitiesFindUniqueArgs } from "./CitiesFindUniqueArgs";
import { DeleteCitiesArgs } from "./DeleteCitiesArgs";
import { CitiesService } from "../cities.service";
@graphql.Resolver(() => Cities)
export class CitiesResolverBase {
  constructor(protected readonly service: CitiesService) {}

  async _citiesItemsMeta(
    @graphql.Args() args: CitiesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Cities])
  async citiesItems(
    @graphql.Args() args: CitiesFindManyArgs
  ): Promise<Cities[]> {
    return this.service.citiesItems(args);
  }

  @graphql.Query(() => Cities, { nullable: true })
  async cities(
    @graphql.Args() args: CitiesFindUniqueArgs
  ): Promise<Cities | null> {
    const result = await this.service.cities(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Cities)
  async deleteCities(
    @graphql.Args() args: DeleteCitiesArgs
  ): Promise<Cities | null> {
    try {
      return await this.service.deleteCities(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}