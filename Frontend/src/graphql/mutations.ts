import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation CreatePayment($createPaymentInput: CreatePaymentInput!) {
    createPayment(createPaymentInput: $createPaymentInput) {
      id
      userId
      amount
      currency
      method
      status
      description
      createdAt
    }
  }
`;

export const UPDATE_PAYMENT = gql`
  mutation UpdatePayment($updatePaymentInput: UpdatePaymentInput!) {
    updatePayment(updatePaymentInput: $updatePaymentInput) {
      id
      status
      transactionId
      updatedAt
    }
  }
`;

export const DELETE_PAYMENT = gql`
  mutation DeletePayment($id: ID!) {
    removePayment(id: $id)
  }
`;
