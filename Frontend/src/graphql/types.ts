// export const PaymentStatus = {
//     PENDING: "PENDING",
//     SUCCESS: "SUCCESS",
//     FAILED: "FAILED",
//     REFUNDED: "REFUNDED",
//   } as const;
  
//   export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

// export interface Payment {
//   id: string;
//   userId: string;
//   amount: number;
//   currency: string;
//   method: string;
//   status: PaymentStatus;
//   transactionId?: string;
//   description?: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface CreatePaymentInput {
//   userId: string;
//   amount: number;
//   currency: string;
//   method: string;
//   description?: string;
// }

// export interface UpdatePaymentInput {
//   id: string;
//   status?: PaymentStatus;
//   transactionId?: string;
//   description?: string;
// }


export const PaymentStatus = {
    PENDING: "PENDING",
    SUCCESS: "SUCCESS",
    FAILED: "FAILED",
    REFUNDED: "REFUNDED",
  } as const;
  
  export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
  
  export interface Payment {
    id: string;
    userId: string;
    amount: number;
    currency: string;
    method: string;
    status: PaymentStatus;
    transactionId?: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreatePaymentInput {
    userId: string;
    amount: number;
    currency: string;
    method: string;
    description?: string;
  }
  
  export interface UpdatePaymentInput {
    id: string;
    status?: PaymentStatus;
    transactionId?: string;
    description?: string;
  }
  
  // Analytics types
  export interface RevenueStat {
    _id: string; // currency
    totalRevenue: number;
    count: number;
  }
  
  export interface MethodStat {
    _id: string; // payment method
    totalAmount: number;
    count: number;
  }
  
  export interface StatusStat {
    _id: string; // payment status
    totalAmount: number;
    count: number;
  }
  
  export interface RevenueQueryResult {
    revenueByCurrency: string; // raw JSON string
  }
  
  export interface MethodQueryResult {
    paymentMethodStats: string; // raw JSON string
  }
  
  export interface StatusQueryResult {
    paymentStatusStats: string; // raw JSON string
  }
  

  export interface RevenueByCurrency {
    _id: string; // currency code
    totalRevenue: number;
    count: number; // number of transactions
  }
  
  export interface PaymentMethodStats {
    _id: string; // method name
    totalAmount: number;
    count: number;
  }
  
  export interface PaymentStatusStats {
    _id: string; // status
    totalAmount: number;
    count: number;
  }
  
  export interface AnalyticsData {
    revenueByCurrency: RevenueByCurrency[];
    paymentMethodStats: PaymentMethodStats[];
    paymentStatusStats: PaymentStatusStats[];
  }
  