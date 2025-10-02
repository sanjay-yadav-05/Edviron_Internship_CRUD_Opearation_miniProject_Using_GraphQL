import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import { PaymentStatus } from '../../../common/enums/payment-status.enum';

@InputType()
export class UpdatePaymentInput {
  @Field(() => ID)
  @IsNotEmpty()
  @IsString()
  id: string;

  @Field(() => PaymentStatus, { nullable: true })
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  transactionId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;
}
