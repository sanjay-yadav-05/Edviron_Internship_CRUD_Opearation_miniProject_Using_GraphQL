import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreatePaymentInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  userId: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  @Min(0.01)
  amount: number;

  @Field({ defaultValue: 'INR' })
  @IsString()
  currency: string = 'INR';

  @Field()
  @IsNotEmpty()
  @IsString()
  method: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;
}
