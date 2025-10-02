import { registerEnumType } from '@nestjs/graphql';

export enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

registerEnumType(PaymentStatus, {
  name: 'PaymentStatus',
  description: 'Status of the payment transaction',
});
