import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from './entities/payment.entity';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { PaymentStatus } from '../../common/enums/payment-status.enum';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentInput: CreatePaymentInput): Promise<Payment> {
    const payment = new this.paymentModel(createPaymentInput);
    return payment.save();
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentModel.find().exec();
  }

  async findOne(id: string): Promise<Payment> {
    const payment = await this.paymentModel.findById(id).exec();
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  async findByUserId(userId: string): Promise<Payment[]> {
    return this.paymentModel.find({ userId }).exec();
  }

  async update(updatePaymentInput: UpdatePaymentInput): Promise<Payment> {
    const { id, ...updateData } = updatePaymentInput;

    const payment = await this.paymentModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }

    return payment;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.paymentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return true;
  }

  // Analytics with MongoDB Aggregation
  async getTotalRevenueByCurrency(): Promise<any[]> {
    return this.paymentModel.aggregate([
      { $match: { status: PaymentStatus.SUCCESS } },
      {
        $group: {
          _id: '$currency',
          totalRevenue: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { totalRevenue: -1 } },
    ]);
  }

  async getPaymentMethodUsage(): Promise<any[]> {
    return this.paymentModel.aggregate([
      {
        $group: {
          _id: '$method',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' },
        },
      },
      { $sort: { count: -1 } },
    ]);
  }

  async getPaymentStatusStats(): Promise<any[]> {
    return this.paymentModel.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' },
        },
      },
    ]);
  }

  async getRevenueByDateRange(startDate: Date, endDate: Date): Promise<any[]> {
    return this.paymentModel.aggregate([
      {
        $match: {
          status: PaymentStatus.SUCCESS,
          createdAt: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
          },
          revenue: { $sum: '$amount' },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
  }
}
