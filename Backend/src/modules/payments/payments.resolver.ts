import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PaymentsService } from './payments.service';
import { Payment } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';

@Resolver(() => Payment)
export class PaymentsResolver {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Mutation(() => Payment)
  createPayment(
    @Args('createPaymentInput') createPaymentInput: CreatePaymentInput,
  ): Promise<Payment> {
    return this.paymentsService.create(createPaymentInput);
  }

  @Query(() => [Payment], { name: 'payments' })
  findAll(): Promise<Payment[]> {
    return this.paymentsService.findAll();
  }

  @Query(() => Payment, { name: 'payment' })
  findOne(@Args('id', { type: () => ID }) id: string): Promise<Payment> {
    return this.paymentsService.findOne(id);
  }

  @Query(() => [Payment], { name: 'paymentsByUser' })
  findByUserId(@Args('userId') userId: string): Promise<Payment[]> {
    return this.paymentsService.findByUserId(userId);
  }

  @Mutation(() => Payment)
  updatePayment(
    @Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput,
  ): Promise<Payment> {
    return this.paymentsService.update(updatePaymentInput);
  }

  @Mutation(() => Boolean)
  removePayment(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.paymentsService.remove(id);
  }

  // Analytics Queries
  @Query(() => String, { name: 'revenueByCurrency' })
  async getRevenueByCurrency(): Promise<string> {
    const result = await this.paymentsService.getTotalRevenueByCurrency();
    return JSON.stringify(result);
  }

  @Query(() => String, { name: 'paymentMethodStats' })
  async getPaymentMethodStats(): Promise<string> {
    const result = await this.paymentsService.getPaymentMethodUsage();
    return JSON.stringify(result);
  }

  @Query(() => String, { name: 'paymentStatusStats' })
  async getPaymentStatusStats(): Promise<string> {
    const result = await this.paymentsService.getPaymentStatusStats();
    return JSON.stringify(result);
  }
}
