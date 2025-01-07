/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StatesWhereInput } from "./StatesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StatesOrderByInput } from "./StatesOrderByInput";

@ArgsType()
class StatesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StatesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StatesWhereInput, { nullable: true })
  @Type(() => StatesWhereInput)
  where?: StatesWhereInput;

  @ApiProperty({
    required: false,
    type: [StatesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StatesOrderByInput], { nullable: true })
  @Type(() => StatesOrderByInput)
  orderBy?: Array<StatesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StatesFindManyArgs as StatesFindManyArgs };