import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentStatus } from '../../../common/enums/payment-status.enum';

@ObjectType()
@Schema({ timestamps: true })
export class Payment {
  @Field(() => ID)
  id: string;

  @Field()
  @Prop({ required: true })
  userId: string;

  @Field(() => Float)
  @Prop({ required: true, type: Number })
  amount: number;

  @Field()
  @Prop({ required: true, default: 'INR' })
  currency: string;

  @Field()
  @Prop({ required: true })
  method: string;

  @Field(() => PaymentStatus)
  @Prop({ type: String, enum: PaymentStatus, default: PaymentStatus.PENDING })
  status: PaymentStatus;

  @Field({ nullable: true })
  @Prop()
  transactionId?: string;

  @Field({ nullable: true })
  @Prop()
  description?: string;

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;

  @Field()
  @Prop({ default: Date.now })
  updatedAt: Date;
}

export type PaymentDocument = Payment & Document;
export const PaymentSchema = SchemaFactory.createForClass(Payment);
