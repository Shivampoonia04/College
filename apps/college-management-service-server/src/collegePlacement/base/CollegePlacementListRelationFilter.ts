/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CollegePlacementWhereInput } from "./CollegePlacementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CollegePlacementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CollegePlacementWhereInput,
  })
  @ValidateNested()
  @Type(() => CollegePlacementWhereInput)
  @IsOptional()
  @Field(() => CollegePlacementWhereInput, {
    nullable: true,
  })
  every?: CollegePlacementWhereInput;

  @ApiProperty({
    required: false,
    type: () => CollegePlacementWhereInput,
  })
  @ValidateNested()
  @Type(() => CollegePlacementWhereInput)
  @IsOptional()
  @Field(() => CollegePlacementWhereInput, {
    nullable: true,
  })
  some?: CollegePlacementWhereInput;

  @ApiProperty({
    required: false,
    type: () => CollegePlacementWhereInput,
  })
  @ValidateNested()
  @Type(() => CollegePlacementWhereInput)
  @IsOptional()
  @Field(() => CollegePlacementWhereInput, {
    nullable: true,
  })
  none?: CollegePlacementWhereInput;
}
export { CollegePlacementListRelationFilter as CollegePlacementListRelationFilter };
