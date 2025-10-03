import { gql } from "@apollo/client";

export const GET_ALL_PAYMENTS = gql`
  query GetAllPayments {
    payments {
      id
      userId
      amount
      currency
      method
      status
      transactionId
      description
      createdAt
      updatedAt
    }
  }
`;

export const GET_PAYMENT_BY_ID = gql`
  query GetPaymentById($id: ID!) {
    payment(id: $id) {
      id
      userId
      amount
      currency
      method
      status
      transactionId
      description
      createdAt
      updatedAt
    }
  }
`;

export const GET_PAYMENTS_BY_USER = gql`
  query GetPaymentsByUser($userId: String!) {
    paymentsByUser(userId: $userId) {
      id
      userId
      amount
      currency
      method
      status
      transactionId
      description
      createdAt
      updatedAt
    }
  }
`;

export const GET_REVENUE_BY_CURRENCY = gql`
  query GetRevenueByCurrency {
    revenueByCurrency
  }
`;

export const GET_PAYMENT_METHOD_STATS = gql`
  query GetPaymentMethodStats {
    paymentMethodStats
  }
`;

export const GET_PAYMENT_STATUS_STATS = gql`
  query GetPaymentStatusStats {
    paymentStatusStats
  }
`;
